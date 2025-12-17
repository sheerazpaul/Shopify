import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiGreaterThanLight } from "react-icons/pi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Logos from "./Logos";

function Side() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-[#EBEBEB] md:hidden">
        <img
          className="h-7"
          src="/images/assets/vidify.png"
          alt="Logo"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-800"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 z-50 h-[1100px] bg-[#EBEBEB] w-[240px] p-3 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:flex md:flex-col md:h-auto`}
      >
        <div className="mt-3">
          <Logos name="Home" src="/images/assets/home.png" to="/" />
          <Logos name="Orders" src="/images/assets/order.png"  />
          <Logos name="Products" src="/images/assets/pro.png" />
          <Logos name="Customers" src="/images/assets/customer.png" />
          <Logos name="Content" src="/images/assets/content.png" />
          <Logos name="Finances" src="/images/assets/finance.png" />
          <Logos name="Analytics" src="/images/assets/analaytic.png" />
          <Logos name="Marketing" src="/images/assets/market.png" />
          <Logos name="Discounts" src="/images/assets/dis.png" />
        </div>
        <div className="mt-8 text-[#434343] font-semibold ml-1">
          <Link className="flex items-center justify-between">
            <p>Sales channels</p>
            <PiGreaterThanLight className="mt-[2px]" />
          </Link>
          <div>
            <Logos name="Online Store" src="/images/assets/online.png" />
            <Logos name="Point of Sales" src="/images/assets/sale.png" />
            <Logos name="Shop" src="/images/assets/shop.png" />
          </div>
        </div>
        <div className="mt-8 text-[#434343] font-semibold ml-1">
          <Link className="flex items-center justify-between">
            <p>Apps</p>
            <PiGreaterThanLight className="mt-[2px]" />
          </Link>

          <div className="pl-1 mt-3 ml-2 bg-white h-9 rounded-xl">
            <Link className="flex items-center gap-3 p-2 pl-1">
              <img
                className="h-4"
                src="/images/assets/vidify.png"
                alt="Vidify"
              />
              <p className="text-black">Vidify</p>
            </Link>
          </div>

          <div className="flex flex-col gap-3 mt-4 font-normal ml-7 text-md ">
            <Link className="hover:bg-white hover:w-48 hover:pl-3 hover:rounded-xl" to="/second">Generate Video</Link>
            <Link className="hover:bg-white hover:w-48 hover:pl-3 hover:rounded-xl" >Subscription Plan</Link>
          </div>
        </div>
        <div className="pt-6  mt-[800px]">
          <Logos name="Settings" src="/images/assets/setting.png" />
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black opacity-30 md:hidden"
        />
      )}
    </>
  );
}

export default Side;
