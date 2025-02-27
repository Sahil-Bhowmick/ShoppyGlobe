import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductsCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
