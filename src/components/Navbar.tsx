"use client";
import { RootState } from "@/redux/Store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

const Navbar: React.FC = () => {

  const cartItems = useSelector((state: RootState) => state.cart);
  const cartCount = cartItems.length;
 const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full body-font bg-gray-900 shadow-md">
      <div className="container mx-auto flex flex-wrap p-1 items-center justify-between max-w-7xl">
        
        {/* Cart for mobile Screen */}

      <div className="flex pl-2 pr-20 md:hidden">
      <Link href="/cart">
          <div className="relative">
            <FiShoppingCart className="text-2xl cursor-pointer text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </Link>
      </div>

        {/* Logo */}

        <div className="font-bold text-xl tracking-wide">
          <Image alt="logo" src="/logo.png" height={100} width={100} />
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden ml-auto text-2xl text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white ">
            Home
          </Link>

          <Link href="/products" className=" text-white ">
            Products
          </Link>

          <Link href="/contact" className=" text-white pr-56">
            Contact
          </Link>

          {/* Search Bar and Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-[#F7EDE4] rounded-full px-4 py-2 w-[400px]">
              <FiSearch className="text-gray-500 text-lg mr-2" />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent focus:outline-none text-sm placeholder-gray-500 w-full"
              />
            </div>
            <Link href="/cart">
          <div className="relative">
            <FiShoppingCart className="text-2xl cursor-pointer text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {isOpen ? (
              <i className="bx bx-x text-3xl hover:border-2 border-solid border-gray-600 p-1"></i> // Close Icon
            ) : (
              <i className="bx bx-menu text-3xl hover:border-2 border-solid border-gray-600 p-1"></i> // Hamburger Icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-200 rounded-lg">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:bg-gray-800 hover:text-white duration-300 active:scale-95 active:bg-gray-600 "
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:bg-gray-800 hover:text-white duration-300 active:scale-95 active:bg-gray-600"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:bg-gray-800 hover:text-white duration-300 active:scale-95 active:bg-gray-600"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar;