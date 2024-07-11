require('dotenv').config(); // Step 3: Load environment variables at the top of your file

const fetchAnnouncements = async () => {
  // Step 4: Access the environment variable
  const sheetDBAPI = process.env.NEXT_PUBLIC_SHEETDB_ENDPOINT_URL; 

  if (!sheetDBAPI) {
    console.error('SHEETDB_ENDPOINT_URL environment variable is not set.');
    return []; // Step 5: Check for undefined variables and handle it
  }

  try {
    const response = await fetch(sheetDBAPI);
    if (!response.ok) throw new Error('Network response was not ok.');

    const data = await response.json();
    const announcements = data.map(item => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      content: item.content,
      date: item.date,
    }));

    console.log(announcements);
    return announcements;
  } catch (error) {
    console.error('Failed to fetch announcements:', error);
    return []; 
  }
};

export { fetchAnnouncements };