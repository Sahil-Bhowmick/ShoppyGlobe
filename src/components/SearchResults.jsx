import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsCard from "./ProductsCard";

const SearchResults = () => {
  const { query } = useParams();
  const products = useSelector((state) => state.shoppyGlobe.productData);

  // Filter products based on the search query
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="py-10 px-4 lg:px-0">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-6">
          Search Results for "{query}"
        </h1>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <ProductsCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
