import UrlParser from '../../routes/url-parser';
import { CreateDetailResto } from '../templates/template-web';
import restaurantSource from '../../data/data-resto';
import LikeButtonInitiator from '../../utils/button-like';
import PostReview from '../../utils/review-testi';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
      <div id="UlasanPengunjung"></div>
      
      <form id="lembar-ulasan" class="form">
        <h1>Yuk, Berikan Ulasanmu!</h1>
        <input type="text" id="review-name" class="input-name" placeholder="Nama" autocomplete="on" required>
        <input type="text" id="review-content" class="input-content" placeholder="Ketik ulasan disini .." autocomplete="on" required>
        <div id="error-message" style="color: red; display: none;">Kolom tidak boleh kosong</div>
        <div class="button-container">
            <button type="submit" class="kirim-ulasan" id="kirim-ulasan">(+)&nbsp;kirim</button>
        </div>
      </form>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = CreateDetailResto(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        description: restaurant.description,
      },
    });

    const buttonkirimUlasan = document.getElementById('kirim-ulasan');
    const reviewName = document.getElementById('review-name');
    const reviewContent = document.getElementById('review-content');
    const errorMessage = document.getElementById('error-message');

    buttonkirimUlasan.addEventListener('click', (event) => {
      event.preventDefault();

      if (reviewName.value.trim() === '' || reviewContent.value.trim() === '') {
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'none';
        const reviewData = {
          id: restaurant.id,
          name: reviewName.value.trim(),
          review: reviewContent.value.trim(),
        };
        PostReview(reviewData);
      }
    });
  },
};

export default Detail;
