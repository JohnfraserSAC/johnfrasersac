import clientPromise from '@/lib/mongodb';
import { parseISO, startOfWeek, addDays, format } from 'date-fns';
import Link from 'next/link';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function getTorontoOffset(date: Date) {
  const toronto = new Date(date.toLocaleString('en-US', { timeZone: 'America/Toronto' }));
  return (date.getTime() - toronto.getTime()) / 60000;
}

export default async function AnnouncementsWeekPage() {
  const client = await clientPromise;
  const db = client.db();

  const now = new Date();
  const weekStart = startOfWeek(now, { weekStartsOn: 1 }); // Monday
  const weekEnd = addDays(weekStart, 4); // Friday

  // Format dates as YYYY-MM-DD
  const startStr = weekStart.toISOString().split('T')[0];
  const endStr = weekEnd.toISOString().split('T')[0];

  const torontoNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/Toronto' }));
  const todayDateStr = torontoNow.toISOString().split('T')[0];

  // Build 8:30 AM Toronto time for today
  const today830Toronto = new Date(
    `${todayDateStr}T08:30:00${torontoNow.toISOString().slice(23, 29)}`
  );

  // Only show announcements up to today (after 8:30am), or up to yesterday (before 8:30am)
  let lastAllowedDate: string;
  if (torontoNow < today830Toronto) {
    // Before 8:30am: only show up to yesterday
    lastAllowedDate = format(addDays(torontoNow, -1), 'yyyy-MM-dd');
  } else {
    // After 8:30am: show up to today
    lastAllowedDate = todayDateStr;
  }

  const dateFilter: any = {
    $gte: startStr,
    $lte: lastAllowedDate,
  };

  const announcements = await db
    .collection('announcements')
    .find({
      approval: true,
      date: dateFilter,
    })
    .toArray();

  // Group by day string (YYYY-MM-DD)
  const grouped: Record<string, any[]> = {};
  announcements.forEach((a) => {
    if (!grouped[a.date]) grouped[a.date] = [];
    grouped[a.date].push(a);
  });

  // Map day names to dates for the week
  const weekDates = Array.from({ length: 5 }, (_, i) => addDays(weekStart, i));
  const dayNameAndDate = weekDates.map((date, i) => ({
    name: daysOfWeek[i],
    dateStr: date.toISOString().split('T')[0],
    display: format(date, 'MMMM do'),
  }));

  return (
    <main>
      <div className='text-white custom-background-4 flex justify-center items-center flex-col text-center pt-40 w-full py-8'>
        <div className='mb-12 text-center flex flex-col justify-center items-center container'>
            <h1 className='text-4xl mb-3 lg:text-6xl font-bold'>Weekly Announcements</h1>
            <p className='w-7/12 text-lg mb-6'>Check out this weeks announcements at john fraser!</p>
        </div>
    </div>
      <div className='py-8 container mx-auto flex flex-col items-center justify-center text-center gap-y-8'>
        <div className='rounded-md w-[600px] shadow-lg'>
          {dayNameAndDate.map(({ name, dateStr, display }) => (
            <div key={name} className='flex border-t-2 border-black border-l-2 last:border-b-2 border-r-2'>
              <h3 className='w-1/4 border-r-2 border-black'>{name}</h3>
              <div className='w-full flex items-center justify-center'>
                {grouped[dateStr] && grouped[dateStr].length > 0 ? (
                  <Link href={`/announcements/week/${dateStr}`}>
                    <p className='underline-offset-0 font-semibold text-lg text-blue-600 hover:text-blue-700 hover:underline transition duration-200 cursor-pointer'>
                      {display} Announcements ({grouped[dateStr].length})
                    </p>
                  </Link>
                ) : (
                  <span className='text-gray-400'>Come back tomorrow!</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <Link href='/announcements/all'>
          <button className='button-5'>View All Announcements</button>
        </Link>
      </div>
    </main>
  );
}