import React, { useState } from "react";
import { productData } from "../../static/data";
import ProductCard from "../Route/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ShopProfileData = ({ isOwner }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="w-full flex">
          {[1, 2, 3].map((tabIndex) => (
            <div
              key={tabIndex}
              className={`flex items-center`}
              onClick={() => handleTabClick(tabIndex)}
            >
              <h5
                className={`font-[600] text-[20px] ${
                  activeTab === tabIndex ? "text-red-400" : "text-black"
                } cursor-pointer pr-[20px]`}
              >
                {tabIndex === 1 && "Shop Products"}
                {tabIndex === 2 && "Running Events"}
                {tabIndex === 3 && "Shop Reviews"}
              </h5>
            </div>
          ))}
        </div>
        <div>
          {isOwner && (
            <div>
              <Link to="/dashboard">
                <div className="bg-black hover:bg-blue-400 text-white font-bold py-2 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded !w-max !h-[45px]">
                  <span>Go to Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <br />
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
        {productData &&
          productData.map((product, index) => (
            <ProductCard data={product} key={index} isShop={true} />
          ))}
      </div>
    </div>
  );
};

export default ShopProfileData;
