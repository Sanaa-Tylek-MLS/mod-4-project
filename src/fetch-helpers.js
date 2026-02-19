export const getCollection = async () => {
  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks/search?q=landscape&query[term][is_public_domain]=true&limit=100&fields=id,title,image_id,artwork_type_title",
    );

    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const getSingleItem = async (id) => {
  try {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);

    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
