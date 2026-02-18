import './style.css'
import { getCollection } from './fetch-helpers.js'
import { renderCollection } from './dom-helpers.js';

const submit = document.querySelector("#submit")
const searched = document.querySelector(`#artSearch`)

getCollection().then((data) => {
  if (data === null) {
    console.log("failed to load")
  } else {
    
    renderCollection(data.data.data)
  }
});



submit.addEventListener(`click`, (event) => {
  event.preventDefault()

  getCollection().then((data) => {
  if (data === null) {
    console.log("failed to load")
  } else {
    const matches = data.data.data.filter((item) => item.title.includes(searched.value));
    renderCollection(matches)
  }
});

})