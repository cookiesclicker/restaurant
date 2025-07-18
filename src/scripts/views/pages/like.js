/* eslint-disable max-len */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurants</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        const restaurantCardElement = document.createElement('div');
        restaurantCardElement.classList.add('restaurant-card');
        restaurantCardElement.innerHTML = createRestaurantItemTemplate(restaurant);
        restaurantsContainer.appendChild(restaurantCardElement);
      });
    } else {
      restaurantsContainer.innerHTML = `<div class="restaurant-item__not__found">
      Tidak ada restoran untuk ditampilkan
    </div>`;
    }
  },
};

export default Like;
