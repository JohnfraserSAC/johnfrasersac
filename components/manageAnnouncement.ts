export interface Announcement {
    id: number;
    slug: string;
    title: string;
    content: string;
    date: string;
  }
  
  const API_URL = 'https://sheetdb.io/api/v1/07ube0lmjw2nh';
  
  export async function fetchAnnouncements(): Promise<Announcement[]> {
    const response = await fetch(API_URL, {
      next: { revalidate: 10 }
    });
    return response.json();
  }
  
  export async function generateStaticParams() {
    const data: Announcement[] = await fetchAnnouncements();
    return data.map((announcement: Announcement) => ({
      slug: announcement.slug,
    }));
  }
  
  export async function fetchAnnouncement(slug: string): Promise<Announcement | null> {
    const data: Announcement[] = await fetchAnnouncements();
    return data.find((announcement) => announcement.slug === slug) || null;
  }