import './style.css'
import { getCollection } from './fetch-helpers.js'
import { renderCollection } from './dom-helpers.js';
import { renderSingleItem } from './dom-helpers.js';
 
getCollection().then((data) => {
  if (data === null) {
    console.log("failed to load")
  } else {
    renderCollection(data.data.data)
  }
});