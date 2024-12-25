export const searchSongs = async (query) => {
  try {
    const response = await fetch(
      `https://api.deezer.com/search?q=${encodeURIComponent(query)}&limit=10`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error message: ", error.message);
      return error.message;
    } else {
      console.log("Unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
