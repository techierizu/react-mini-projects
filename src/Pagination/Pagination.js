import { useEffect, useState } from "react";
import "./Pagination.css";

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <span className="product-title">{title}</span>
    </div>
  );
};

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const PAGE_SIZE = 10;

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  const TOTAL_PRODUCT = products.length;
  const NoOfPAGES = Math.ceil(TOTAL_PRODUCT / PAGE_SIZE);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Pagination</h1>
      <div>
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>

        {[...Array(NoOfPAGES).keys()].map((p) => (
          <span
            key={p}
            className="page-no"
            style={{ backgroundColor: currentPage === p ? "lightgray" : "" }}
            onClick={() => setCurrentPage(p)}
          >
            {p + 1}
          </span>
        ))}

        <button
          disabled={currentPage >= NoOfPAGES - 1}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
      <div className="product-wrapper">
        {products.slice(currentPage * 10, currentPage * 10 + 10).map((p) => {
          return (
            <div key={p.id}>
              <ProductCard image={p.thumbnail} title={p.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
