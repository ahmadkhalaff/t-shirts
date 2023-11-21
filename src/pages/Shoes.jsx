import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { getAllShoes } from "../api";
import NewsLetter from "../components/NewsLetter";
import './ShoesStyles.css'
function Shoes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      getAllShoes().then((res) => {
        setLoading(false);
        setProducts(res.data);
      }).catch((err) => {
        setLoading(false);
        setError(err);
      });
    };
    fetchProducts();
  }, []);
  return (
    <div className="parent_shoes_container">
      <h1 className="listing_heading">Listings</h1>

      {loading && <Loader />}
      {error && <p>{error.message}</p>}

      <div className="shoes_container">
        {products.map((product, key) => (
          <ProductCard key={key} product={product} />
        ))}
      </div>
      
    </div>
  );
}

export default Shoes;
