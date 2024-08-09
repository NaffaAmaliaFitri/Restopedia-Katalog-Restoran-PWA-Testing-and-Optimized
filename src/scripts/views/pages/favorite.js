import FavoriteRestaurantIdb from '../../data/data-resto-fav';
import { CreateRestoItem } from '../templates/template-web';

const Favorite = {
  async render() {
    return `
      <div class="fav_content">
        <h1 class="fav_content-label">
          <i class="fas fa-heart"></i>&nbsp;&nbsp;Resto Favorite&nbsp;&nbsp;<i class="fas fa-heart"></i>
        </h1>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += CreateRestoItem(restaurant);
    });
  },
};

export default Favorite;
