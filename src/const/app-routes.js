/** These show upp in the menu-bar**/
export const AppRoute = {
  Home: "routes.home",
  BakeryShop: "routes.bakeryShop",
  Bakery: "routes.bakery",
  Stores: "routes.stores",
  // Error: "routes.error"
}

/**
 * Defined routes
 */
export const AppRouteTitles = new Map([
  [AppRoute.Home, 'home.title'],
  [AppRoute.BakeryShop, 'bakeryShop.title'],
  [AppRoute.Bakery, 'bakery.title'],
  [AppRoute.Stores, 'stores.title'],
  [AppRoute.Error, 'error.title']
]);