import './style.css'
import { getCollection } from './fetch-helpers.js'
import { renderCollection } from './dom-helpers.js';

const submit = document.querySelector("#submit")
const searched = document.querySelector(`#artSearch`).value
const match = 

getCollection().then((data) => {
  if (data === null) {
    console.log("failed to load")
  } else {
    renderCollection(data.data.data)
  }
});



submit.addEventListener(`click`, (event) => {
  event.preventDefault()


  console.log(searched)

})