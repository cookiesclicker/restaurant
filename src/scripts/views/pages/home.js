import restoranDbSource from '../../data/restoran-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const home = {
  async render() {
    return `
      <div id="hero" class="hero" tabindex="0">
        <picture>
          <source media="(max-width: 600px)" srcset="images/hero-image_2-small.jpg">
          <img src="images/hero-image_2-large.jpg" alt="Poster Restaurant">
        </picture>
      </div>
      <h2>Daftar Restoran</h2>
      <div id="restoran-list" class="restoran-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await restoranDbSource.home();
    const restoranListContainer = document.querySelector('#restoran-list');
    restoranListContainer.tabIndex = 0;
    restaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('div');
      restaurantCard.classList.add('restaurant-card');
      restaurantCard.innerHTML = createRestaurantItemTemplate(restaurant);
      restoranListContainer.appendChild(restaurantCard);
    });
  },
};

export default home;
