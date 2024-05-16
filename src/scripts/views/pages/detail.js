import UrlParser from '../../routes/url-parser';
import restoranDbSource from '../../data/restoran-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <h2>Detail Restoran</h2>
      <div id="restoran-detail" class="restoran-detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await restoranDbSource.detailRestoran(url.id);
      const restoranDetailContainer = document.querySelector('#restoran-detail');

      if (restaurant) {
        restoranDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

        LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant: {
            id: restaurant.restaurant.id,
            name: restaurant.restaurant.name,
            description: restaurant.restaurant.description,
            pictureId: restaurant.restaurant.pictureId,
            rating: restaurant.restaurant.rating,
          },
        });
      } else {
        restoranDetailContainer.innerHTML = '<p>Data restoran tidak ditemukan.</p>';
      }
    } catch (error) {
      console.error('Error:', error);
      const restoranDetailContainer = document.querySelector('#restoran-detail');
      restoranDetailContainer.innerHTML = '<p>Terjadi kesalahan dalam pengambilan data.</p>';
    }
  },
};

export default Detail;
