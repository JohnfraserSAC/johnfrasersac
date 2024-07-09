// const fetchAnnouncements = async () => {
//   const sheetDBAPI = 'API_ENDPOINT_URL'; // Replace with your actual SheetDB API endpoint

//   try {
//     const response = await fetch(sheetDBAPI);
//     if (!response.ok) throw new Error('Network response was not ok.');

//     const data = await response.json();
//     const announcements = data.map(item => ({
//       id: item.id,
//       slug: item.slug,
//       title: item.title,
//       content: item.content,
//       date: item.date,
//     }));

//     console.log(announcements);
//     return announcements; // Return the announcements array for use elsewhere
//   } catch (error) {
//     console.error('Failed to fetch announcements:', error);
//     return []; // Return an empty array in case of error
//   }
// };

// export { fetchAnnouncements };


const fetchAnnouncementsMock = async () => {
  // Simulated delay to mimic network request
  const simulateDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Mock data structure that resembles the expected API response
  const mockData = [
    { id: 1, slug: 'announcement-1', title: 'Announcement 1', content: 'Content for announcement 1', date: '2023-04-01' },
    { id: 2, slug: 'announcement-2', title: 'Announcement 2', content: 'Content for announcement 2', date: '2023-04-02' },
    { id: 3, slug: 'announcement-3', title: 'Announcement 3', content: 'Content for announcement 3', date: '2023-04-03' },
    { id: 4, slug: 'announcement-4', title: 'Announcement 4', content: 'Content for announcement 4', date: '2023-04-04' },
    { id: 5, slug: 'announcement-5', title: 'Announcement 5', content: 'Content for announcement 5', date: '2023-04-05' },
    { id: 6, slug: 'announcement-6', title: 'Announcement 6', content: 'Content for announcement 6', date: '2023-04-06' },
    { id: 7, slug: 'announcement-7', title: 'Announcement 7', content: 'Content for announcement 7', date: '2023-04-07' },
    // Add more mock announcements as needed
  ];

  try {
    await simulateDelay(500); // Simulate network delay
    const announcements = mockData.map(item => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      content: item.content,
      date: item.date,
    }));

    console.log(announcements);
    return announcements; // Return the mock announcements array for use elsewhere
  } catch (error) {
    console.error('Failed to fetch announcements:', error);
    return []; // Return an empty array in case of error
  }
};

export { fetchAnnouncementsMock as fetchAnnouncements };