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

export default async function AnnouncementsPage({ searchParams }: { searchParams: { search?: string } }) {
    const searchQuery = searchParams.search || '';
    const announcements: Announcement[] = await getAllAnnouncements(searchQuery);

    return (
        <main>
            <div className='container mx-auto flex justify-center items-center flex-col text-center gap-y-4' style={{ height: '90.3333vh' }}>
                <h1 className='text-5xl font-bold '>Search For Announcements</h1>
                <form method="get" action="/announcements/search" className='mb-4'>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search..."
                        defaultValue={searchQuery}
                        className='p-2 border rounded'
                    />
                    <button type="submit" className='button-2'>Search</button>
                </form>
                <ul className='w-7/12 text-center overflow-y-auto border' style={{ height: '20vh' }}>
                    {announcements.map(announcement => (
                        <li key={announcement.id}>
                            <div className='flex justify-evenly mb-4 '>
                                <div className=' w-full'>
                                    <Link href={`/announcements/search/${announcement.slug}`}>
                                        <p className='font-bold underline'>{announcement.title}</p>
                                    </Link>
                                </div>
                                <div className=' w-full'>
                                    <p className='text-blue-500'>{announcement.date}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}