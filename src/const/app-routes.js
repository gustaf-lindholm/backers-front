/** These show upp in the menu-bar**/
export const AppRoute = {
  Home: "routes.home",
  Cafe: "routes.cafe",
  Bakery: "routes.bakery",
  Products: "routes.products",
  // Error: "routes.error"
}

/**
 * Defined routes
 */
export const AppRouteTitles = new Map([
  [AppRoute.Home, 'home.title'],
  [AppRoute.Cafe, 'cafe.title'],
  [AppRoute.Bakery, 'bakery.title'],
  [AppRoute.Products, 'products.title'],
  [AppRoute.Error, 'error.title']
]);