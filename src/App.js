import "./App.css";
import Banner from "./Banner";
import BottomFooter from "./BottomFooter";
import Navbar from "./Navbar";
import Product from "./Product";
import TopFooter from "./TopFooter";

function App() {
  return (
    <div>
      <TopFooter />
      <div className="app-name-bar">
        <h1 className="app-name">ShopKart</h1>
        <h3 className="Bag">BAG(0)</h3>
        <h3 className="wishlist">WISHLIST(0)</h3>
        <hr />
      </div>
      <Navbar />
      <Banner />
      <Product />
      <BottomFooter />
    </div>
  );
}

export default App;
