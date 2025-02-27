import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const [baseQty, setBaseQty] = useState(1);

  const { state: location } = useLocation();

  useEffect(() => {
    if (!location?.item) return;

    setDetails((prevDetails) =>
      prevDetails !== location.item ? location.item : prevDetails
    );
  }, [location]);

  const handleAddToCart = () => {
    try {
      dispatch(
        addToCart({
          id: details.id,
          title: details.title,
          image: details.images,
          price: details.price,
          quantity: baseQty,
          description: details.description,
        })
      );
      toast.success(`${details.title} is added to cart.`);
    } catch (error) {
      toast.error("Failed to add item to cart. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Product Image */}
        <div className="w-full lg:w-2/5 relative">
          <img
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[550px] object-contain rounded-sm transition-transform duration-300 transform hover:scale-105"
            src={
              Array.isArray(details?.images)
                ? details.images[0]
                : details.images
            }
            alt="productImg"
          />
          {details?.availabilityStatus && (
            <span
              className={`absolute top-2 right-2 rounded-full py-1 px-3 text-xs md:text-sm font-semibold shadow-md ${
                details?.availabilityStatus === "In Stock"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {details?.availabilityStatus}
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-3/5 flex flex-col gap-3 md:gap-6">
          {/* Title and Price */}
          <div>
            <h2 className="text-lg lg:text-3xl font-semibold">
              {details.title}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-xl lg:text-2xl font-medium text-gray-900">
                ₹ {(details.price * 10).toFixed(2)}
              </p>
            </div>
            {/* Stock Information */}
            {details?.stock !== undefined && (
              <div className="mt-2">
                {details.stock > 10 && (
                  <p className="text-sm lg:text-base font-semibold text-green-600">
                    In Stock: {details.stock}
                  </p>
                )}
                {details.stock > 0 && details.stock <= 10 && (
                  <div>
                    <p className="text-sm lg:text-base font-semibold text-red-600">
                      Only {details.stock} left in stock!
                    </p>
                    <p className="text-xs lg:text-sm text-red-500 font-medium">
                      Hurry up, product will be out of stock soon!
                    </p>
                  </div>
                )}
                {details.stock === 0 && (
                  <p className="text-sm lg:text-base font-semibold text-red-600">
                    Out of Stock
                  </p>
                )}
              </div>
            )}
          </div>
          {/* Brand */}
          {details.brand && (
            <p className="text-sm lg:text-base text-gray-600">
              Brand:{" "}
              <span className="font-medium capitalize">{details.brand}</span>
            </p>
          )}

          {/* Ratings */}
          <div className="flex items-center gap-2">
            <div className="flex text-sm text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <MdOutlineStar
                  key={index}
                  className={
                    index < Math.round(details.rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <p className="text-xs text-gray-500">
              {details.rating ? details.rating.toFixed(1) : "No ratings yet"}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm lg:text-base text-gray-500">
            {details.description}
          </p>
          {/* Category */}
          <p className="text-xs lg:text-sm text-gray-600 mt-2">
            Category:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>

          {/* Quantity Selector and Add to Cart Button */}
          <div className="flex flex-row sm:flex-row items-center gap-2 sm:gap-12">
            {/* Quantity Selector */}
            <div className="w-48 sm:w-1/3 lg:w-52 rounded-lg flex items-center justify-between text-gray-700 gap-4 border border-gray-300 p-2 bg-white shadow-sm">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <button
                  onClick={() => setBaseQty(Math.max(1, baseQty - 1))}
                  className="border border-gray-300 rounded-full h-8 w-8 font-normal text-lg flex items-center justify-center hover:bg-gray-100 hover:text-gray-800 transition duration-300 ease-in-out shadow-sm"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border border-gray-300 rounded-full h-8 w-8 font-normal text-lg flex items-center justify-center hover:bg-gray-100 hover:text-gray-800 transition duration-300 ease-in-out shadow-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white py-3 px-4 sm:py-3 sm:px-6 mt-2 sm:mt-0 w-full sm:w-auto m-2 md:mb-0 transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-blue-600 hover:to-indigo-600 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 max-w-xs sm:max-w-none"
            >
              Add to Cart
            </button>
          </div>

          {/* Reviews Section */}
          {details?.reviews && details.reviews.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">
                Customer Reviews
              </h3>
              <div className="flex flex-col gap-6 mt-4">
                {details.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-300 pb-4 mb-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-gray-700">
                        {review.reviewerName}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                      {[...Array(5)].map((_, i) => (
                        <MdOutlineStar
                          key={i}
                          className={
                            i < review.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Toast Container for Notifications */}
      <ToastContainer
        position="top-left"
        style={{ marginTop: "70px" }}
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Product;
