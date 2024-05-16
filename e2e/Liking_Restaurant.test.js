const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.restaurant-item__not__found');

  // I.seeElement('.query'); --> menyebabkan error

  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  // pause();

  I.seeElement('.restaurant-item__content h3 a');
  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__content h3 a', 10);

  I.seeElement('.restaurant-item__content h3 a');

  const firstResto = locate('.restaurant-item__content h3 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 10);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.waitForElement('.restaurant-item', 15);
  I.seeElement('.restaurant-item');
  const likedRestoTitle = await I.grabTextFrom('.restaurant-item__content h3');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.click(firstResto);

  I.waitForElement('#likeButton', 10);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});
