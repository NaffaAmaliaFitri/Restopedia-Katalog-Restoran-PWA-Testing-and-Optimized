import FavoriteRestaurantIdb from '../../data/data-resto-fav';
import { CreateRestoItem } from '../templates/template-web';

const Like = {
  async render() {
    return `
      <section class="content">
        <div class="katalog">
          <h1 tabindex="0" class="katalog_label">Favorite Restaurant</h1>
          <div class="posts"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.posts');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += CreateRestoItem(restaurant);
    });

    this._hideHero();
  },

  _hideHero() {
    const heroContent = document.querySelector('hero-section');
    heroContent.style.display = 'none';
  },
};

export default Like;
