import type { Metadata } from 'next';
import Link from 'next/link';
import { parseISO, getDay } from 'date-fns';

const API_URL = process.env.NEXT_PUBLIC_SHEETDB_ENDPOINT_URL;

export const metadata: Metadata = {
    title: 'Announcements',
};

interface Announcement {
    id: number;
    slug: string;
    title: string;
    content: string;
    date: string;
}

// getting all of the data from the sheetdb (once on deployment)
async function getAllAnnouncements(searchQuery: string = ''): Promise<Announcement[]> {
    if (!API_URL) {
        throw new Error('API URL is not defined');
    }

    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch announcements');
    }
    let announcements: Announcement[] = await response.json();

    // sorting algorithm to display originally (by date)
    if (searchQuery) {
        announcements = announcements.filter(announcement =>
            announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            announcement.content.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    announcements.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return announcements;
}

// Function to group announcements by day of the week (Monday to Friday)
function groupAnnouncementsByDay(announcements: Announcement[]) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const grouped: { [key: string]: Announcement[] } = {};

    daysOfWeek.forEach(day => {
        grouped[day] = [];
    });

    announcements.forEach(announcement => {
        const date = parseISO(announcement.date); // Parse date string to Date object using date-fns
        const dayIndex = getDay(date); // Get day of the week as an index (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
        console.log(`Date: ${announcement.date}, Day Index: ${dayIndex}`); // Log the date and day index
        if (dayIndex >= 1 && dayIndex <= 5) { // Only include Monday to Friday
            const dayName = daysOfWeek[dayIndex - 1]; // Map index to day name
            if (!grouped[dayName].length || new Date(announcement.date) > new Date(grouped[dayName][0].date)) {
                grouped[dayName] = [announcement]; // Replace with the most recent announcement
            }
        }
    });

    return grouped;
}

export default async function AnnouncementsPage({ searchParams }: { searchParams: { search?: string } }) {
    const searchQuery = searchParams.search || '';
    const announcements: Announcement[] = await getAllAnnouncements(searchQuery);
    const groupedAnnouncements = groupAnnouncementsByDay(announcements);

    return (
        <main>
            <div className='text-white custom-background-4 flex justify-center items-center flex-col text-center pt-40 w-full py-8'>
                    <div className='mb-12 text-center flex flex-col justify-center items-center container'>
                        <h1 className='text-4xl mb-3 lg:text-6xl font-bold'>Weekly Announcements</h1>
                        <p className='w-7/12 text-lg mb-6'>Check out this weeks announcements at john fraser!</p>
                    </div>
            </div>
            <div className="py-8 container mx-auto flex flex-col items-center justify-center text-center gap-y-8">
                <div className=' rounded-md w-[600px] shadow-lg'>
                    <div className=''>
                        {Object.keys(groupedAnnouncements).map(day => (
                            <div key={day} className=' flex border-t-2 border-black border-l-2 last:border-b-2 border-r-2'>
                                <h3 className='w-1/4 border-r-2 border-black'>{day}</h3>
                                <div className='w-full'>
                                    {groupedAnnouncements[day].map((announcement) => (
                                        <li
                                            key={announcement.id}
                                            className="w-full flex justify-between items-center hover:bg-gray-50 transition duration-150"
                                        >
                                            <div className='w-full flex justify-evenly items-center'>
                                                <Link href={`/announcements/week/${announcement.slug}`}>
                                                    <p className="underline-offset-0 font-semibold text-lg text-blue-600 hover:text-blue-700 hover:underline transition duration-200">
                                                        {announcement.title}
                                                    </p>
                                                </Link>
                                                <p className="text-gray-500 text-sm">
                                                    {announcement.date}
                                                </p>
                                            </div>  
                                        </li>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Link href='/announcements/all'>
                            <button className='button-5'>View All Announcements</button>
                    </Link>
            </div>
        </main>
    );
}