import React from "react";
import { useSelector } from "react-redux";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  const searchTerm = useSelector((state) => state.shoppyGlobe.searchTerm);

  // Filter products based on search term
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-10 px-4 lg:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-2">
            Shopping Everyday
          </h1>
          <div className="w-16 h-1 bg-black rounded-full"></div>
          <p className="max-w-lg lg:max-w-xl text-gray-700 text-center mt-4">
            Explore the latest trends and must-have products for your everyday
            needs.
          </p>
        </div>

        {/* Display filtered products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <ProductsCard key={item.id} product={item} />
          ))}
        </div>

        {/* Show message if no products match the search */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600">
            No products found for "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
