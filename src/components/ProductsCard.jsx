import React from "react";
import { FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rootId = product.title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.images,
        price: product.price,
        quantity: 1,
        description: product.description,
      })
    );
    toast.success(`${product.title} is added to cart.`);
  };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
      <div className="w-full h-56 overflow-hidden rounded-t-3xl cursor-pointer relative">
        <img
          className="w-full h-full object-contain rounded-t-2xl transition-transform duration-500 transform scale-110 group-hover:scale-115 object-center"
          src={product?.images[0]}
          alt={product?.title}
          loading="lazy"
          decoding="async"
        />
        {product?.availabilityStatus && (
          <span
            className={`absolute top-2 right-2 rounded-full py-1 px-3 text-xs md:text-sm font-semibold shadow-md ${
              product?.availabilityStatus === "In Stock"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {product?.availabilityStatus}
          </span>
        )}
      </div>
      <div className="p-5 space-y-3">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 hover:text-teal-600 transition-colors duration-300 line-clamp-1">
          {product?.title}
        </h2>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            ₹{(product?.price * 10).toFixed(2)}
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
            </svg>
            <span className="font-medium">{product?.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="text-sm text-gray-500">{product?.category}</div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={handleAddToCart}
            className="w-full py-2 md:py-3 text-sm md:text-base text-white rounded-full 
            bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 
            transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
          >
            Add to Cart
          </button>

          <div
            onClick={handleDetails}
            className="relative group cursor-pointer"
          >
            <button
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full 
              bg-gradient-to-r cursor-pointer from-gray-100 to-gray-300 hover:from-gray-200 hover:to-gray-400 
              transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
            >
              <FaEye className="text-xl text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs rounded-md bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Product
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
