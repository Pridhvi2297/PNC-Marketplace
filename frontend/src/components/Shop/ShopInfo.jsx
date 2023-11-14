import React from "react";
import { useSelector } from "react-redux";
import { backend_url, server } from "../../server";
import axios from "axios";

const ShopInfo = ({ isOwner }) => {
  const { seller } = useSelector((state) => state.seller);

  const logoutHandler = () => {
    axios.get(`${server}/shop/logout`,{
      withCredentials: true,
    });
    window.location.reload();
  };

  return (
    <div className="w-full py-5">
      <div className="flex items-center justify-center">
        <img
          src={`${backend_url}${seller?.avatar}`}
          alt="Seller"
          className="w-[150px] h-[150px] object-cover rounded-full"
        />
      </div>
      <h3 className="text-center py-2 text-2xl font-bold">{seller.name}</h3>
      <p className="text-base text-[#250e0e] p-2">{seller.description}</p>

      <div className="grid grid-cols-1 gap-4">
        <InfoItem title="Address" content={seller.address} />
        <InfoItem title="Phone Number" content={seller.phoneNumber} />
        <InfoItem title="Total Products" content="100" />
        <InfoItem title="Shop Ratings" content="4/5" />
        <InfoItem title="Joined On" content={seller.createdAt?.slice(0, 10)} />
      </div>

      {isOwner && (
        <div className="py-6 px-8">
          <ActionButton label="Edit Shop" />
          <br />
          <ActionButton label="Log Out" onClick={logoutHandler} />
        </div>
      )}
    </div>
  );
};

const InfoItem = ({ title, content }) => (
  <div className="p-3 border rounded-md shadow-md items-center justify-center">
    <h5 className="font-semibold">{title}</h5>
    <h4 className="text-[#250e0e]">{content}</h4>
  </div>
);

const ActionButton = ({ label, onClick }) => (
  <div
  className="bg-black hover:bg-blue-400 text-white font-bold py-4 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded-md"
  onClick={onClick}
  >
    <span className="text-white">{label}</span>
  </div>
);

export default ShopInfo;
