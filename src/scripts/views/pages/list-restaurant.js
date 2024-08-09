import RestaurantDbSource from '../../data/data-resto';
import { CreateRestoItem } from '../templates/template-web';

const ListRestaurant = {
  async render() {
    return `
      <section class="content">
        <div class="katalog">
          <h1 tabindex="0" class="katalog_label">Explore More</h1>
          <div class="posts"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurant();
    const restaurantsContainer = document.querySelector('.posts');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += CreateRestoItem(restaurant);
    });

    this._showHero();
  },

  _showHero() {
    const heroContent = document.querySelector('hero-section');
    heroContent.style.display = 'block';
  },
};

export default ListRestaurant;
