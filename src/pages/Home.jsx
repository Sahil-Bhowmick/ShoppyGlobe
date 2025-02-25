import React from "react";
import Products from "../components/Products";
import { useProducts } from "../hooks/useProducts";

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl overflow-hidden transform transition hover:scale-105"
        >
          <div className="relative bg-gray-300 h-56 w-full rounded-t-2xl overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full shimmer"></div>
          </div>
          <div className="p-4">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-3 shimmer"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-3 shimmer"></div>
            <div className="h-6 bg-gray-300 rounded w-1/3 shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <LoadingSkeleton />;

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-100">
        <p className="text-2xl text-red-600 font-semibold">Error: {error}</p>
      </div>
    );

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Home;
