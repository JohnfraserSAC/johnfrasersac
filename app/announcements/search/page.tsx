import type { Metadata } from 'next';
import Link from 'next/link';

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
        const date = new Date(announcement.date);
        const dayIndex = date.getDay();
        if (dayIndex >= 1 && dayIndex <= 5) { // Only include Monday to Friday
            const dayName = daysOfWeek[dayIndex - 1];
            grouped[dayName].push(announcement);
        }
    });

    return grouped;
}

export default async function AnnouncementsPage({ searchParams }: { searchParams: { search?: string } }) {
    const searchQuery = searchParams.search || '';
    const announcements: Announcement[] = await getAllAnnouncements(searchQuery);
    const groupedAnnouncements = groupAnnouncementsByDay(announcements);

    return (
        <main className="min-h-screen bg-gray-50 py-12 pt-32 md:pt-40">
            <div className="container mx-auto flex flex-col items-center justify-center text-center gap-y-8">
                <div className='border-4 border-black rounded-md w-[600px] shadow-lg'>
                    <h1>Weekly Announcements 📢</h1>
                    <div className=''>
                        {Object.keys(groupedAnnouncements).map(day => (
                            <div key={day}>
                                <h3 className='border'>{day}</h3>
                                <div className='border'>
                                    {groupedAnnouncements[day].map((announcement) => (
                                        <li
                                            key={announcement.id}
                                            className="p-4 flex justify-between items-center hover:bg-gray-50 transition duration-150"
                                        >
                                            <Link href={`/announcements/search/${announcement.slug}`}>
                                                <p className="font-semibold text-lg text-blue-600 hover:text-blue-700 hover:underline transition duration-200">
                                                    {announcement.title}
                                                </p>
                                            </Link>
                                            <p className="text-gray-500 text-sm">
                                                {announcement.date}
                                            </p>
                                        </li>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}