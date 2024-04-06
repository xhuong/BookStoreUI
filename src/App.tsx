import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollButton from "@/components/ScrollToTop/ScrollButton";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="app">
      <div className="app_content">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            {/* need to be protect this router  */}
            <Route path="/my-cart" element={<CartPage />} />
          </Routes>
        </Router>
      </div>
      {/* <ScrollButton /> */}
    </div>
  );
}

export default App;
