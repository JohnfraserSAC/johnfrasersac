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