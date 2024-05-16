import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <div class="restaurant-detail__header">
      <h2 class="restaurant-detail__name">${restaurant.name}</h2>
      <img class="restaurant-detail__picture" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />
    </div>
    <div class="restaurant-detail__info">
      <div class="info-card">
        <h3>Address</h3>
        <p>${restaurant.address}</p>
      </div>
      <div class="info-card">
        <h3>City</h3>
        <p>${restaurant.city}</p>
      </div>
      <div class="info-card">
        <h3>Rating</h3>
        <p>${restaurant.rating}</p>
      </div>
    </div>
    <div class="restaurant-detail__body">
      <h3>Description</h3>
      <p>${restaurant.description}</p>
    </div>
    <div class="restaurant-detail__menus">
      <h3>Menu</h3>
      <div class="menu__category">
        <h4>Foods</h4>
        <ul>
          ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
      </div>
      <div class="menu__category">
        <h4>Drinks</h4>
        <ul>
          ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
      </div>
    </div>
  </div>
  <div class="reviews">
    <h3>Customer Reviews</h3>
    <div class="reviews-container">
      ${restaurant.customerReviews.map((review) => `
        <div class="review-card">
          <div class="review-card__info">
            <p><strong>${review.name}</strong> (${review.date})</p>
          </div>
          <div class="review-card__content">
            <p>${review.review}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <img class="lazyload restaurant-item__picture" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
