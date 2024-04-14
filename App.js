import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import banner_save from "./Components/Assets/banner_save.png";
import Footer from "./Components/Footer/Footer";
import banner_shipping from "./Components/Assets/banner_shipping.png";

import ShopContextProvider from "../src/Context/ShopContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/Office"
              element={
                <ShopCategory banner={banner_shipping} category="Office" />
              }
            />
            <Route
              path="/Bedroom"
              element={<ShopCategory banner={banner_save} category="Bedroom" />}
            />
            <Route
              path="/Dining"
              element={
                <ShopCategory banner={banner_shipping} category="Dining" />
              }
            />
            <Route
              path="/Living"
              element={<ShopCategory banner={banner_save} category="Living" />}
            />
            <Route path="/Product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
