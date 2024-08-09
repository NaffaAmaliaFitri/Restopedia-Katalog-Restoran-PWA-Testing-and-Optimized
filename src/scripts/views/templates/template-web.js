import CONFIG from '../../globals/config';

const menuKategori = (restaurant) => restaurant.categories
  .map(
    (category) => `
      <li>${category.name}</li>
    `,
  )
  .join('');

const menuMakanan = (restaurant) => restaurant.menus.foods
  .map(
    (food) => `
      <li>${food.name}</li>
      `,
  )
  .join('');

const menuMinuman = (restaurant) => restaurant.menus.drinks
  .map(
    (drink) => `
      <li>${drink.name}</li>
      `,
  )
  .join('');

const customerReviews = (restaurant) => restaurant.customerReviews
  .map(
    (review) => `
      <li class="review">
        <div class="nama-ulasan">${review.name}</div>
        <div class="tanggal-ulasan">${review.date}</div>
        <div class="hasil-ulasan">"${review.review}"</div>
      </li>
      `,
  )
  .join('');

const CreateDetailResto = (restaurant) => `
<h2 class="detailresto_title"><i class="fas fa-drumstick-bite"></i>&nbsp;&nbsp;Detail Restoran Kami&nbsp;&nbsp;<i class="fas fa-drumstick-bite"></i></h2>
<div class="detailresto_section">

<picture>
  <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
  <img class="lazyload detailresto_image" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
       alt="${restaurant.name}">
</picture>
  <div class="detailresto_about">
      <table>
        <tr>
          <th>Nama Restoran</th>
          <td>${restaurant.name}</td>
        </tr>
        <tr>
          <th>Alamat</th>
          <td>${restaurant.address}</td>
        </tr>
        <tr>
          <th>Kota</th>
          <td>${restaurant.city}</td>
        </tr>
        <tr>
          <th>Rating</th>
          <td>${restaurant.rating}</td>
        </tr>
      </table>
    </div>
</div>

  <div class="detailresto_desc">
      <p>${restaurant.description}</p>
  </div>

  <div class="resto_table_menu">
    <h4 class="resto-label"><i class="fas fa-book"></i>&nbsp;&nbsp;Kategori</i></h4>
      <ul class="menu-resto"> ${menuKategori(restaurant)}</ul>
    <h4 class="resto-label"><i class="fas fa-pizza-slice"></i>&nbsp;&nbsp;Menu Makanan</i></h4>
      <ul class="menu-resto"> ${menuMakanan(restaurant)}</ul>
    <h4 class="resto-label"><i class="fas fa-ice-cream"></i>&nbsp;&nbsp;Menu Minuman</i></h4>
      <ul class="menu-resto"> ${menuMinuman(restaurant)}</ul>
  </div>

  <div class="testimoni">
  <h1 class="testimoni-label"><i class="fas fa-comment"></i>&nbsp;&nbsp;Kata Mereka&nbsp;&nbsp;<i class="fas fa-comment"></i>&nbsp;&nbsp;</h1>
    <ul class="kotak-testimoni"> ${customerReviews(restaurant)}</ul>
</div>
`;

const CreateRestoItem = (restaurant) => `
  <div class="article_item">
    <div class="article_city">${restaurant.city}</div>
    <div class="article_resto">
      <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
    </div>
    <div class="article_rating">
    <i class="fas fa-star"></i><span class="article-rating-score">${restaurant.rating}</span>
    </div>
    <picture>
      <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <img class="lazyload article_photo" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
           alt="${restaurant.name}">
    </picture>
    <div class="article_desc">
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButton = () => `
  <button aria-label="sukai resto ini" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButton = () => `
  <button aria-label="hapus suka resto ini" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  CreateRestoItem,
  CreateDetailResto,
  createLikeButton,
  createUnlikeButton,
};
