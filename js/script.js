// Imports
// import { alert } from './components/alert.js';
import fetchProducts from './lib/api.js';
import productCards from './lib/cards.js';

// Alert message
// alert('success', 'This is a success message', '.alert');
// alert('warning', 'This is a message', '.alert');

// API 
let api = await fetchProducts (' https://noroffcors.herokuapp.com/' + 'fakestoreapi.com/products');
let html = "";

api.forEach((element) => {
  html +=
    `
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="${element.image}" class="card-img-top replacement_img" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
        </div>
      </div>
    </div> 
  `
});
productCards(html, '.test');
