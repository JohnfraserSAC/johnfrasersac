import type { Metadata } from 'next';
import Link from 'next/link';

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

async function getAllAnnouncements(searchQuery: string = ''): Promise<Announcement[]> {
    const response = await fetch('https://sheetdb.io/api/v1/07ube0lmjw2nh');
    if (!response.ok) {
        throw new Error('Failed to fetch announcements');
    }
    let announcements: Announcement[] = await response.json();

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
            <div className='flex justify-center items-center flex-col text-center gap-y-4' style={{ height: '90.3333vh' }}>
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
                            <div className='flex justify-evenly mb-4'>
                                <Link href={`/announcements/search/${announcement.slug}`}>
                                    <p className='font-bold underline'>{announcement.title}</p>
                                </Link>
                                <p className='text-blue-500'>{announcement.date}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}