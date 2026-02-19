import "./style.css";
import { getCollection, getSingleItem } from "./fetch-helpers.js";
import { renderCollection, renderSingleItem } from "./dom-helpers.js";

const submit = document.querySelector("#submit");
const searched = document.querySelector(`#artSearch`);
const container = document.querySelector(".container");

let favoriteArtworks = []

getCollection().then((data) => {
  if (data === null) {
    console.log("failed to load");
  } else {
    renderCollection(data.data.data);
  }
});

submit.addEventListener(`click`, (event) => {
  event.preventDefault();

  getCollection().then((data) => {
    if (data === null) {
      console.log("failed to load");
    } else {
      const matches = data.data.data.filter((item) =>
        item.title.includes(searched.value),
      );
      renderCollection(matches);
    }
  });
});

container.addEventListener(`click`, (event) => {
  const card = event.target.closest(".card");
  // If nothing matching a card was clicked, stop here
  if (!card) return;

  // Get the artwork id we saved on the card earlier
  const id = card.dataset.id;

  // Fetch that one artwork and render it in the single item section
  getSingleItem(id).then((result) => {
    if (result.error) {
      console.warn("Failed to load artwork", result.error);
    } else {
      renderSingleItem(result.data.data);
    }
  });
});

container.addEventListener(`click`, (event) => {
  const card = event.target.closest(".card");
  // If nothing matching a card was clicked, stop here
  if (!card) return;

  // Get the artwork id we saved on the card earlier
  const id = card.dataset.id;

  // Fetch that one artwork and render it in the single item section
  getCollection(id).then((data) => {
    if (data === null) {
      console.log("failed to load");
    } else {
      favoriteArtworks.push(data.data.data)
      console.log(id)
      localStorage.setItem("favorites", favoriteArtworks);
      console.log(localStorage.getItem("favorites"))
    }
  });
});