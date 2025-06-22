const ROOT_ROUTE = "/";
const ABOUT_ROUTE = "about";
const CABINET_ROUTE = "cabinet";
const CART_ROUTE = "cart";
const CONTACTS_ROUTE = "contacts";
const FAVORITE_ROUTE = "favorite";
const MAIN_ROUTE = "main";
const ORDER_HISTORY_ROUTE = "orderHistory";
const USER_DATA_ROUTE = "userData";
const REGISTRATION_ROUTE = "registration";
const PRIVATE_ROUTE = "/authorized";
const COST_CALCULATOR = "costCalculator";
const WHERE_TO_BUY = "where_to_by";
const PRODUCTS = "products";
const NEWS = "news";
const RECIPCES = "recipes";
const NEWS_ROUTE = "news";
const ORDER_PAGE = "order";

const SystemRoute = {
  root: () => `${ROOT_ROUTE}`,

  registration: () => `${REGISTRATION_ROUTE}`,

  private: () => `${PRIVATE_ROUTE}`,

  privateRoute: () => `${PRIVATE_ROUTE}/`,

  about: () => `${ABOUT_ROUTE}`,

  cabinet: () => `${CABINET_ROUTE}`,

  newsDetail: () => `${NEWS_ROUTE}/:id`,

  costCalculator: () => `${COST_CALCULATOR}`,

  cart: () => `${CART_ROUTE}`,

  contacts: () => `${CONTACTS_ROUTE}`,

  favorite: () => `${FAVORITE_ROUTE}`,

  main: () => `${MAIN_ROUTE}`,

  orderHistory: () => `${ORDER_HISTORY_ROUTE}`,

  userData: () => `${USER_DATA_ROUTE}`,

  whereToBy: () => `${WHERE_TO_BUY}`,

  products: () => `${PRODUCTS}`,

  news: () => `${NEWS}`,

  recipes: () => `${RECIPCES}`,

  orderPage: () => `${ORDER_PAGE}`,

  directory: () => `${PRIVATE_ROUTE}`,
};

export default SystemRoute;
