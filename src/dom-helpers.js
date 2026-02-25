export const renderCollection = (data) => {
  console.log(data);

  const list = document.querySelector("#art-list");
  list.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const imgID = data[i]["image_id"];
    const title = data[i]["title"];

    const li = document.createElement("li");   // <-- was "div"
    li.classList.add("card");
    li.dataset.id = data[i]["id"];

    const p = document.createElement("p");
    p.classList.add("title");
    p.textContent = title;

    const img = document.createElement("img");
    img.src = `https://www.artic.edu/iiif/2/${imgID}/full/843,/0/default.jpg`;
    img.classList.add("image");

    // I added: buttons at the bottom of each card
    const btnRow = document.createElement("div");
    btnRow.classList.add("card-btns");

    const expandBtn = document.createElement("button");
    expandBtn.classList.add("expand-btn");
    expandBtn.textContent = "expand";
    expandBtn.dataset.id = data[i]["id"];

    const favBtn = document.createElement("button");
    favBtn.classList.add("fav-btn");
    favBtn.textContent = "★";
    favBtn.dataset.id = data[i]["id"];
    favBtn.dataset.title = title;

    btnRow.appendChild(expandBtn);
    btnRow.appendChild(favBtn);

    li.appendChild(p);
    li.appendChild(img);
    list.appendChild(li);
    li.appendChild(btnRow);  // Added
  }
};

export const renderSingleItem = (data) => {

  const title = document.querySelector('#single-title')
  title.textContent = data.title

  const artist = document.querySelector('#single-artist')
  artist.textContent = data.artist_title

  const img = document.querySelector('#single-image')
  img.src = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`
  img.alt = data.alt_text

  const date = document.querySelector('#single-date')
  date.textContent = data.date_display

  const description = document.querySelector('#single-description')
  description.textContent = data.short_description
}

// Adds an artwork to favortites
export const addToFavorites = (favorites) => {
  const favList = document.querySelector('#favorites-list')
  list.innerHTML = "";

  for (let i = 0; i < favorites.length; i++) {
    const li = document.createElement("li");
    li.classList.add("fav-item");
    li.textContent = favorites[i].title;
    list.appendChild(li);
  }
}