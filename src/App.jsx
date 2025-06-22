import "./App.css";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SystemRoute from "./routes/routes.jsx";
import PrivateWrapper from "./components/private_route/private_route.js";
import Login from "./pages/login/login.jsx";
import Contacts from "./pages/contacts/contacts.jsx";
import About from "./pages/about/about.jsx";
import Cart from "./pages/cart/cart.jsx";
import Favorite from "./pages/favorite/favorite.jsx";
import Products from "./pages/products/products.jsx";
import Registration from "./pages/registration/registration.jsx";
import Cabinet from "./pages/cabinet/cabinet.jsx";
import OrderHistory from "./pages/order_history/order_history.jsx";
import WhereToBy from "./pages/where_to_by/where_to_by.jsx";
import News from "./pages/news/news.jsx";
import Recipes from "./pages/recipes/recipes.jsx";
import NewsDetail from "./pages/news_detail/news_detail.jsx";
import OrdersPage from "./pages/orders_page/orders_page.jsx";
import Directory from "./pages/directory/directory.jsx";
import { CartProvider } from "./server_controller/cart_context.js";

const Main = lazy(() => import("./pages/main/main.jsx"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={SystemRoute.root()} element={<Login />} />
          <Route path={SystemRoute.registration()} element={<Registration />} />
          <Route element={<PrivateWrapper />}>
            <Route path={SystemRoute.privateRoute()} element={<Main />} />

            <Route
              path={SystemRoute.privateRoute() + SystemRoute.newsDetail()}
              element={<NewsDetail />}
            />
            <Route
              path={SystemRoute.privateRoute() + SystemRoute.directory()}
              element={<Directory />}
            />
            <Route
              path={SystemRoute.privateRoute() + SystemRoute.orderPage()}
              element={<OrdersPage />}
            />
            <Route
              path={SystemRoute.privateRoute() + SystemRoute.cabinet()}
              element={<Cabinet />}
            />
            <Route
              path={SystemRoute.privateRoute() + SystemRoute.favorite()}
              element={<Favorite />}
            />
            <Route
              path={SystemRoute.privateRoute() + SystemRoute.recipes()}
              element={<Recipes />}
            />
            <Route
              path={SystemRoute.privateRoute() + SystemRoute.cart()}
              element={
                <CartProvider>
                  <Cart />
                  {" "}
                </CartProvider>
              }
            />
            <Route
              path={SystemRoute.privateRoute() + SystemRoute.products()}
              element={
                <CartProvider>
                  <Products />
                  {" "}
                </CartProvider>
              }
            />
            <Route
              path={SystemRoute.privateRoute() + SystemRoute.whereToBy()}
              element={<WhereToBy />}
            />
            <Route
              path={SystemRoute.privateRoute() + SystemRoute.about()}
              element={<About />}
            />
            <Route
              path={SystemRoute.privateRoute() + SystemRoute.contacts()}
              element={<Contacts />}
            />
            <Route
              path={SystemRoute.privateRoute() + SystemRoute.news()}
              element={<News />}
            />

            <Route
              path={SystemRoute.privateRoute() + SystemRoute.orderHistory()}
              element={<OrderHistory />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
