import * as TestFactory from "./helper/test-factory";
import FavoriteRestaurantIdb from "../src/scripts/data/data-resto-fav";

// Deskripsi pengujian
describe("Liking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should display the like button when the restaurant has not been liked before", async () => {
    await TestFactory.createLikeButtonInitWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="sukai resto ini"]')).toBeTruthy();
  });

  it("should not display the unlike button when the restaurant has not been liked before", async () => {
    await TestFactory.createLikeButtonInitWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="hapus suka resto ini"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
  await TestFactory.createLikeButtonInitWithRestaurant({ id: 1 });
  document.querySelector('#likeButton').dispatchEvent(new Event('click'));
  console.log('After clicking like button');
  const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
  console.log('Restaurant:', restaurant);
  await FavoriteRestaurantIdb.deleteRestaurant(1);
});

  it("should not add a restaurant again when it is already liked", async () => {
    await TestFactory.createLikeButtonInitWithRestaurant({ id: 1 });
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(restaurants.length).toBe(1);
    expect(restaurants[0].id).toEqual(1);
  });

  it("should not add a restaurant when it has no ID", async () => {
    await TestFactory.createLikeButtonInitWithRestaurant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(restaurants.length).toBe(0);
  });
});
