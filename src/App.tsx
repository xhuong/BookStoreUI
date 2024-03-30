import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollButton from "./components/ScrollToTop/ScrollButton";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <div className="app">
      <div className="app_content">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </Router>
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;
