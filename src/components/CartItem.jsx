import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  deleteItem,
  resetCart,
} from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.shoppyGlobe.productData);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
      <div className="mt-8">
        <h2 className="font-bold text-3xl text-gray-800">Shopping Cart</h2>
      </div>
      <div className="mt-6 space-y-6">
        {productData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 transition duration-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <MdDelete
                onClick={() => {
                  dispatch(deleteItem(item.id));
                  toast.error(`${item.title} is removed`);
                }}
                className="text-3xl text-gray-500 hover:text-red-600 cursor-pointer transition duration-300"
              />

              <img
                className="w-24 h-24 object-cover rounded-lg"
                src={item?.image[0]}
                alt={item?.title}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-center md:text-left mt-4 md:mt-0 md:w-1/3">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-500 mt-1">
                Price: ₹{(item.price * 10).toFixed(2)}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <span className="text-gray-600">Quantity:</span>
              <div className="flex items-center gap-2">
                <span
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border rounded-lg h-8 w-8 flex items-center justify-center text-gray-700 hover:bg-gray-300 cursor-pointer transition duration-300"
                >
                  -
                </span>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <span
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border rounded-lg h-8 w-8 flex items-center justify-center text-gray-700 hover:bg-gray-300 cursor-pointer transition duration-300"
                >
                  +
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-lg font-semibold text-gray-800">
                Total: ₹{(item.quantity * (item.price * 10)).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 space-y-4 sm:space-y-0">
        <button
          onClick={() => {
            dispatch(resetCart());
            toast.error("Your Cart is Empty!");
          }}
          disabled={productData.length === 0}
          className={`py-2 px-6 rounded-full transition duration-300 shadow-md text-white ${
            productData.length === 0
              ? "bg-gradient-to-r from-gray-300 to-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700"
          }`}
        >
          Reset Cart
        </button>
        {productData.length === 0 && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-md animate-pulse mb-4">
              Your cart is currently empty!
            </p>
            <Link to="/">
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white rounded-full py-2 px-6 transition duration-300 shadow-md">
                Shop Now
              </button>
            </Link>
          </div>
        )}

        <Link to="/">
          <button className="flex items-center gap-1 text-gray-700 hover:text-black transition duration-300">
            <HiOutlineArrowLeft className="text-xl" />
            Go to Shopping
          </button>
        </Link>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
