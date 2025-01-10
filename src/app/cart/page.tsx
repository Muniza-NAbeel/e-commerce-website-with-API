"use client";
import React from "react";
import { remove } from "../../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      
      {/* Cart items section */}
      <div className="space-y-8">
        {cartItems.map((item: CartItem) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image Section */}
            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
              <Image
                src={item.image}
                alt={item.title}
                height={120}
                width={120}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="ml-6 mt-4 md:mt-0 flex-grow">
              <h5 className="text-xl font-semibold text-gray-800">{item.title}</h5>
              <h5 className="text-lg font-medium text-gray-600 mt-1">${item.price}</h5>
            </div>

            {/* Button Section */}
            <button
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 active:bg-red-400 active:scale-95 transition-all mt-4 md:mt-0"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart total */}
      {cartItems.length > 0 && (
        <div className="mt-12 flex justify-between items-center bg-white p-6 rounded-xl shadow-lg">
          <h4 className="text-2xl font-semibold text-gray-800">Total: </h4>
          <span className="text-3xl font-bold text-gray-900">
            ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </span>
        </div>
      )}

      {/* Empty cart message */}
      {cartItems.length === 0 && (
        <div className="mt-12 text-center text-gray-600 text-medium">
          <p>There are no items in this cart.
          </p>
          <Link href="/products">
          <button className="mt-10 text-black bg-white border-2 border-black hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center active:bg-gray-600 active:scale-95 transition-all shadow-md"
                >
                  CONTINUE SHOPPING
                </button>
                </Link>
        </div>
      )}

    </div>
  );
};

export default Cartpage;

