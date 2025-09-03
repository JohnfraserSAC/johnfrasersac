import type { Metadata } from 'next';
import Link from 'next/link';
import clientPromise from '@/lib/mongodb';

export const metadata: Metadata = {
    title: 'Announcements',
};

interface Announcement {
    _id: string;
    title: string;
    description: string;
    date: string;
    club: string;
    slug: string;
    approval: boolean;
}

// Fetch all approved announcements from schoolPortal.announcements
async function getAllAnnouncements(searchQuery: string = ''): Promise<Announcement[]> {
    const client = await clientPromise;
    const db = client.db('schoolPortal');
    const collection = db.collection('announcements');

    // Build filter
    const filter: any = { approval: true };
    if (searchQuery) {
        filter.$or = [
            { title: { $regex: searchQuery, $options: 'i' } },
            { description: { $regex: searchQuery, $options: 'i' } }
        ];
    }

    // Fetch and sort by date descending
    const announcements = await collection
        .find(filter)
        .sort({ date: -1 })
        .toArray();

    // Only show announcements after 8:30am of their date
    const now = new Date();
    const visibleAnnouncements = announcements.filter((a: any) => {
        if (!a.date) return false;
        // Create a Date object for 8:30am of the announcement date (local time)
        const revealTime = new Date(`${a.date}T08:30:00`);
        return now >= revealTime;
    });

    // Convert _id to string for React keys (if not already)
    return visibleAnnouncements.map((a: any) => ({
        ...a,
        _id: a._id.toString(),
    }));
}

export default async function AnnouncementsPage({ searchParams }: { searchParams: { search?: string } }) {
    const searchQuery = searchParams.search || '';
    const announcements: Announcement[] = await getAllAnnouncements(searchQuery);

    return (
        <main className="min-h-screen bg-gray-50 py-12 pt-32 md:pt-40">
            <div className="container mx-auto flex flex-col items-center justify-center text-center gap-y-8">
                {/* Heading */}
                <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
                    Search For Announcements
                </h1>
                {/* Search Form */}
                <form method="get" action="/announcements/all" className="w-full max-w-lg flex flex-col sm:flex-row gap-4 items-center">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search announcements..."
                        defaultValue={searchQuery}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
                    />
                    <button type="submit" className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                        Search
                    </button>
                </form>
                {/* Announcements List */}
                <div className="flex justify-center w-full px-4">
                    <ul className="w-full max-w-3xl bg-white rounded-lg shadow-md divide-y divide-gray-200 overflow-y-auto lg:h-[40vh] h-[50vh] md:h-[60vh]">
                        {announcements.map((announcement) => (
                            <li
                                key={announcement._id}
                                className="p-4 flex justify-between items-center hover:bg-gray-50 transition duration-150"
                            >
                                {/* Title */}
                                <Link href={`/announcements/all/${announcement.slug}`}>
                                    <p className="font-semibold text-lg text-blue-600 hover:text-blue-700 hover:underline transition duration-200">
                                        {announcement.title}
                                    </p>
                                </Link>
                                {/* Date */}
                                <p className="text-gray-500 text-sm">
                                    {announcement.date}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}