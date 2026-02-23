import "./style.css";
import { getCollection, getSingleItem } from "./fetch-helpers.js";
import { renderCollection, renderSingleItem, renderFavorites } from "./dom-helpers.js";

const submit = document.querySelector("#submit");
const searched = document.querySelector(`#artSearch`);
const container = document.querySelector(".container");
const favoriteButton = document.querySelector("#fav-btn")

// Load favorites from localStorage (parse the comma-separated string back into an array)
let favoriteArtworks = localStorage.getItem("favorites")
  ? localStorage.getItem("favorites").split(",").filter(Boolean)
  : [];

// Render the initial art collection
getCollection().then((data) => {
  if (data === null) {
    console.log("failed to load");
  } else {
    renderCollection(data.data.data);
  }
});

// Render favorites from localStorage on page load
renderFavorites(favoriteArtworks, getSingleItem);

// Search handler
submit.addEventListener(`click`, (event) => {
  event.preventDefault();
  getCollection().then((data) => {
    if (data === null) {
      console.log("failed to load");
    } else {
      const matches = data.data.data.filter((item) =>
        item.title.includes(searched.value)
      );
      renderCollection(matches);
    }
  });
});

// Open single item on card click
container.addEventListener(`click`, (event) => {
  const card = event.target.closest(".card");
  if (!card) return;
  const id = card.dataset.id;
  getSingleItem(id).then((result) => {
    if (result.error) {
      console.warn("Failed to load artwork", result.error);
    } else {
      renderSingleItem(result.data.data);
    }
  });
});

favoriteButton.addEventListener("click", () => {
  const singleCard = document.querySelector("#single-card");
  const id = singleCard.dataset.id;

  if (!id) return; // no item is open, do nothing

  if (!favoriteArtworks.includes(id)) {
    favoriteArtworks.push(id);
    localStorage.setItem("favorites", favoriteArtworks.join(","));
    renderFavorites(favoriteArtworks, getSingleItem);
  }
});