import LikeButtonInitiator from "../../src/scripts/utils/button-like";
import FavoriteRestaurantIdb from "../../src/scripts/data/data-resto-fav";

const createLikeButtonInitWithRestaurant = async (restaurant) => {
  document.body.innerHTML = '<div id="likeButton"></div>';
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButton"),
    restaurant,
    favoriteRestaurants: FavoriteRestaurantIdb,
  });
};

export { createLikeButtonInitWithRestaurant };