// creating a PageProps to go off of (predifining)
export interface Announcement {
    id: number;
    slug: string;
    title: string;
    content: string;
    date: string;
  }
  
  // get the API to sheetDB
  const API_URL = process.env.NEXT_PUBLIC_SHEETDB_ENDPOINT_URL ?? '';
  
  // get the info in the form of json
  export async function fetchAnnouncements(): Promise<Announcement[]> {
    const response = await fetch(API_URL, {
      // change this value for how many times you want the API to be called (measured in seconds)
      next: { revalidate: 10 }
    });
    return response.json();
  }
  
  // generating it statically (only when re-deploying or every 10 seconds)
  export async function generateStaticParams() {
    const data: Announcement[] = await fetchAnnouncements();
    return data.map((announcement: Announcement) => ({
      slug: announcement.slug,
    }));
  }
  
  // exporting the data to use in page.tsx!
  export async function fetchAnnouncement(slug: string): Promise<Announcement | null> {
    const data: Announcement[] = await fetchAnnouncements();
    return data.find((announcement) => announcement.slug === slug) || null;
  }