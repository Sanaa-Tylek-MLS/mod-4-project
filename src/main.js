import './style.css'
import { getCollection, getSingleItem } from './fetch-helpers.js'
import { renderCollection, renderSingleItem, addToFavorites, loadFavorites } from './dom-helpers.js';

const submit = document.querySelector("#submit")
const searched = document.querySelector(`#artSearch`)
const container = document.querySelector(".container")
const overlay = document.querySelector("#overlay")
const closeBtn = document.querySelector("#close-btn")

let favorites = loadFavorites(); 

getCollection().then((result) => {
  if (result.error) {                  
    console.warn("failed to load", result.error)
  } else {
    renderCollection(result.data.data)
  }
});



submit.addEventListener(`click`, (event) => {
  event.preventDefault()

  getCollection().then((result) => {
  if (result.error) {                    
    console.warn("Failed to load artwork", result.error)
  } else {
    const matches = result.data.data.filter((item) => item.title.includes(searched.value));
    renderCollection(matches)
    searched.value = "" 
  }
});
})

container.addEventListener(`click`, (event) => {
  if (event.target.classList.contains('expand-btn')) {
    const id = event.target.dataset.id

    getSingleItem(id).then((result) => {
      if (result.error) {
        console.warn("Failed to load artwork", result.error)
      } else {
        renderSingleItem(result.data.data)
        overlay.classList.remove('hidden')
      }
    });
    return
  }
  if (event.target.classList.contains('fav-btn')) {
    const id = event.target.dataset.id
    const title = event.target.dataset.title
    const img = event.target.dataset.image

    const alreadyAdded = favorites.some((fav) => fav.id == id)
    if (!alreadyAdded) {
      favorites.push({ id, title, img })
      addToFavorites(favorites)
    }
    return
  }
})

closeBtn.addEventListener(`click`, () => {
  overlay.classList.add('hidden')
})