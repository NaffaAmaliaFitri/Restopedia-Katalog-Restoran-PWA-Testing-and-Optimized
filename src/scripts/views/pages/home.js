import RestaurantSource from '../../data/data-resto';
import { CreateRestoItem } from '../templates/template-web';

const Home = {
  async render() {
    return `
      <hero-image></hero-image>
      <div class="label">
        <h1 class="explore"><i class="fas fa-pepper-hot"></i>&nbsp;&nbsp;Explore Lebih Banyak&nbsp;&nbsp;<i class="fas fa-pepper-hot"></i></h1>
      </div>
      <div id="restaurants" class="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.home();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += CreateRestoItem(restaurant);
    });
  },
};

export default Home;
