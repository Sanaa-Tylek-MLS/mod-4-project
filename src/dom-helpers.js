export const renderCollection = (data) => {
  console.log(data);
  
  const app = document.querySelector("#app");
  const container = document.querySelector(".container");
  container.innerHTML = "";

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