import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default async function Prodects({
  params,
}: {
  params: { product: string };
}) {
  const data = await fetch(`https://dummyjson.com/products/${params.product}`);
  const res = await data.json();
  console.log(res);
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={res.images[0]}
              width={900}
              height={900}
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {res.title}
              </h1>
              {/* Review */}

              <div className="rating rating-sm mb-4 mt-1">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>

              {/* Paragraph */}
              <p className="leading-relaxed scroll-m-20 text-base font-normal text-black">
                {res.description}
              </p>
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

              {/* Divider */}

              <div className="divider"></div>

              {/* Price */}

              <div className="flex">
                <span className="scroll-m-20 text-2xl font-semibold tracking-tight text-black">
                  $58.00
                </span>

                {/* Add to Cart Button */}
                <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:text-gray-500 scroll-m-20 text-xs lg:text-sm font-semibold tracking-tight rounded-xl active:bg-gray-300 active:scale-95 transition-all">
                  <FaShoppingCart className="mr-2 h-4 w-4 duration-300 " />
                  Add to Cart
                </button>
              </div>

              {/* Buy Now Button */}

              <button className="flex w-full mt-5 justify-center items-center text-white bg-black border-0 py-2 px-6 focus:outline-none hover:text-orange-500 scroll-m-20 text-xs lg:text-sm font-semibold tracking-tight rounded-xl active:bg-gray-300 active:scale-95 transition-all">
                <FaHeart className="mr-2 h-4 w-4 duration-300  hover:text-gray-500 " />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
