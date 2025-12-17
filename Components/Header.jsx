import React from 'react';
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between w-full h-auto p-3 text-white bg-black md:p-4">
      {/* --- Left: Logo --- */}
      <div className="flex items-center flex-shrink-0">
        <img className="h-8 md:h-9" src="/images/assets/image.png" alt="Logo" />
      </div>

      {/* --- Middle: Search Bar --- */}
      <div className="flex items-center w-full mt-3 sm:mt-0 sm:w-auto md:flex-1 md:justify-center">
        <div className="flex w-full sm:w-[300px] md:w-[500px] lg:w-[560px]">
          <div className="flex items-center justify-center bg-[#303030] rounded-l-xl px-3 text-[#aaa]">
            <IoIosSearch className="text-lg" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[36px] px-3 bg-[#303030] border-none rounded-r-xl text-sm text-white focus:outline-none placeholder-[#676464]"
          />
        </div>
      </div>

      {/* --- Right: Icons Section --- */}
      <div className="flex items-center gap-2 mt-3 sm:mt-0">
        <div className="w-[30px] h-[30px] p-2 bg-[#303030] rounded-md flex justify-center items-center">
          <img className="w-[16px] h-[16px]" src="/images/assets/face.png" alt="User" />
        </div>

        <div className="w-[30px] h-[30px] p-2 bg-[#303030] rounded-md flex justify-center items-center">
          <img className="w-[16px] h-[16px]" src="/images/assets/bell.png" alt="Notifications" />
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-[#303030] px-2 py-1 rounded-md text-sm">
          <p className="truncate max-w-[80px]">Stellar interior</p>
          <img className="w-[26px] h-[26px] rounded-md" src="/images/assets/chair.png" alt="Profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
