import * as TestFactory from "./helper/test-factory";
import FavoriteRestaurantIdb from "../src/scripts/data/data-resto-fav";

describe("Unliking A Restaurant", () => {
  const setupLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    setupLikeButtonContainer();
    global.structuredClone = jest.fn((val) => JSON.parse(JSON.stringify(val)));
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should display the unlike button when the restaurant has been liked", async () => {
    await TestFactory.createLikeButtonInitWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="hapus suka resto ini"]')).toBeTruthy();
  });

  it("should not display the like button when the restaurant has been liked", async () => {
    await TestFactory.createLikeButtonInitWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="sukai resto ini"]')).toBeFalsy();
  });

  it("should be able to remove liked restaurant from the list", async () => {
    await TestFactory.createLikeButtonInitWithRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it("should not throw an error when the unlike button is clicked if the restaurant is not in the list", async () => {
    await TestFactory.createLikeButtonInitWithRestaurant({ id: 1 });
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document.querySelector('[aria-label="hapus suka resto ini"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
