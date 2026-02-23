export const renderCollection = (data) => {
  const list = document.querySelector("#art-list");
  list.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const imgID = data[i]["image_id"];
    const title = data[i]["title"];

    const li = document.createElement("li");
    li.classList.add("card");
    li.dataset.id = data[i]["id"];

    const p = document.createElement("p");
    p.classList.add("title");
    p.textContent = title;

    const img = document.createElement("img");
    img.src = `https://www.artic.edu/iiif/2/${imgID}/full/843,/0/default.jpg`;
    img.classList.add("image");

    li.appendChild(p);
    li.appendChild(img);
    list.appendChild(li);
  }
};

export const renderFavorites = async (ids, getSingleItem) => {
  const list = document.querySelector("#favorites-list");
  list.innerHTML = "";

  for (const id of ids) {
    const result = await getSingleItem(id);
    if (result.error) continue;

    const artwork = result.data.data;
    const li = document.createElement("li");
    li.classList.add("card");
    li.dataset.id = artwork.id;

    const p = document.createElement("p");
    p.classList.add("title");
    p.textContent = artwork.title;

    const img = document.createElement("img");
    img.src = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
    img.classList.add("image");

    li.appendChild(p);
    li.appendChild(img);
    list.appendChild(li);
  }
};

export const renderSingleItem = (data) => {
  const singleCard = document.querySelector('#single-card');
  singleCard.dataset.id = data.id; 
  
  const title = document.querySelector('#single-title');
  title.textContent = data.title;
  
  const artist = document.querySelector('#single-artist');
  artist.textContent = data.artist_title;
  
  const img = document.querySelector('#single-image');
  img.src = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;
  img.alt = data.alt_text;
  
  const date = document.querySelector('#single-date');
  date.textContent = data.date_display;
  
  const description = document.querySelector('#single-description');
  description.textContent = data.short_description;
};