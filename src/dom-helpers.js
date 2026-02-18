export const renderCollection = (data) => {
  console.log(data);
  
  const app = document.getElementById("app");
  app.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const imgID = data[i]["image_id"];
    const title = data[i]["title"];

    const section = document.createElement("section");
    section.classList.add("container");

    const card = document.createElement("div");
    card.classList.add("card");

    const p = document.createElement("p");
    p.classList.add("title");
    p.textContent = title;

    const img = document.createElement("img");
    img.src = `https://www.artic.edu/iiif/2/${imgID}/full/843,/0/default.jpg`;
    img.classList.add("image");

    card.appendChild(p);
    card.appendChild(img);
    section.appendChild(card);
    app.appendChild(section);
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