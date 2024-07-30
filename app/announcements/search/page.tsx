import type { Metadata } from 'next'
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Announcements',
}

interface Announcement {
    id: number;
    slug: string;
    title: string;
    content: string;
    date: string;
}

async function getAllAnnouncements(): Promise<Announcement[]> {
    const response = await fetch('https://sheetdb.io/api/v1/07ube0lmjw2nh');
    if (!response.ok) {
        throw new Error('Failed to fetch announcements');
    }
    return response.json();
}

export default async function AnnouncementsPage() {
    const announcements: Announcement[] = await getAllAnnouncements();

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            {announcements.map(announcement => {
                return (
                    <div key={announcement.id}>
                        <p>
                            <Link href={`/announcements/${announcement.slug}`}>{announcement.title}</Link>
                        </p>
                        <p>{announcement.content}</p>
                        <p>{announcement.date}</p>
                        <br />
                    </div>
                )
            })}
        </section>
    )

    return content;
}