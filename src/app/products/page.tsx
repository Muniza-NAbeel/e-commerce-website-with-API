"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/CartSlice";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  image?: string; 
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products); 
  };

  const handleAdd = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image || product.thumbnail, 
    };
    dispatch(add(cartItem));
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (!products.length) {
    return <div>Loading products...</div>; 
  }

  return (
    <div className="p-12">
      <div className="text-center">
        <h2 className="text-gray-800 scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
          Products
        </h2>
        <div className="flex justify-center mt-2">
          <div className="w-16 h-1 rounded-full bg-gray-400 inline-flex"></div>
        </div>
      </div>
      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 pt-10">
        {products.map((val) => (
          <div
            key={val.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl duration-100 hover:scale-95"
          >
            <Link href={`products/${val.id}`}>
              <Image
                className="p-8 rounded-t-lg w-[400px] h-[400px]"
                src={val.thumbnail}
                alt={val.title}
                height={400}
                width={400}
              />
            </Link>

            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {val.title}
              </h5>
              <div className="flex items-center mt-2.5 mb-5">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${val.price}
                </span>
                <button
                  onClick={() => handleAdd(val)}
                  className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center active:bg-gray-600 active:scale-95 transition-all"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

