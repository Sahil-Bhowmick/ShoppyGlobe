import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const productData = useSelector((state) => state.shoppyGlobe.productData);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    const total = productData.reduce(
      (acc, item) => acc + item.price * 10 * item.quantity,
      0
    );
    setTotalAmt(parseFloat(total.toFixed(2)));
  }, [productData]);

  return (
    <div>
      <img
        className="w-full h-60 object-cover hidden lg:block md:block"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-20 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <CartItem />
        </div>
        <div className="lg:w-1/3 md:w-5/6 md:mx-auto lg:ml-8 rounded-lg bg-white shadow-lg p-6 mt-6 lg:mt-0">
          <div className="flex flex-col gap-4 pb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Order Summary
            </h2>
            {productData.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b border-gray-200 pb-2"
              >
                <p className="text-gray-600">
                  {item.title} (Qty: {item.quantity})
                </p>
                <p className="font-semibold text-gray-800">
                  ₹{(item.price * 10 * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <div className="flex justify-between text-lg font-medium mt-4">
              <p className="text-gray-800">Subtotal:</p>
              <p className="text-gray-800">₹{totalAmt}</p>
            </div>
            <div className="text-gray-600 mt-2">
              <p className="text-lg font-medium">Shipping:</p>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                consectetur.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-gray-300 pt-4">
            <h2 className="text-xl font-semibold text-gray-800">Total:</h2>
            <p className="text-xl font-semibold text-gray-800">₹{totalAmt}</p>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 mt-6 rounded-lg hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
