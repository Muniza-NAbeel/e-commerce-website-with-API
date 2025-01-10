"use client";

import { useDispatch } from "react-redux";
import { add } from "../../../redux/CartSlice";
import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";

// Define the type for the product data
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export default function Prodects({ params }: { params: { product: string } }) {
  const [product, setProduct] = useState<Product | null>(null); // Use the Product type
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/${params.product}`
      );
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [params.product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAdd = () => {
    const productData = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
    };

    dispatch(add(productData));
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.images[0]}
            width={900}
            height={900}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>

            <p className="leading-relaxed text-base font-normal text-black">
              {product.description}
            </p>

            {/* Product Color */}
            <div className="flex mt-6 items-center mb-8">
              <div className="flex">
                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-black">
                  Color :
                </span>
                <button className="border-2 border-gray-300 mr-1 bg-white active:border-black focus:border-black rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 mr-1 bg-red-600 active:border-black focus:border-black rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 mr-1 bg-blue-600 active:border-black focus:border-black rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 mr-1 bg-black active:border-black focus:border-black rounded-full w-6 h-6 focus:outline-none" />
              </div>

              {/* Product Size */}
              <div className="flex ml-6 items-center">
                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-black">
                  Size:
                </span>

                <label className="form-control w-full max-w-xs">
                  <select className="select select-bordered">
                    <option disabled selected>
                      {" "}
                      Select Size{" "}
                    </option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="divider"></div>

            <div className="flex">
              <span className="text-2xl font-semibold tracking-tight text-black">
                ${product.price}
              </span>

              <button
                onClick={handleAdd}
                className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:text-gray-500 text-xs lg:text-sm font-semibold tracking-tight rounded-xl active:bg-gray-600 active:scale-95 transition-all"
              >
                <FaShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </button>
            </div>

            <button className="flex w-full mt-5 justify-center items-center text-white bg-black border-0 py-2 px-6 focus:outline-none hover:text-orange-500 text-xs lg:text-sm font-semibold tracking-tight rounded-xl active:bg-gray-300 active:scale-95 transition-all">
              <FaHeart className="mr-2 h-4 w-4" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
