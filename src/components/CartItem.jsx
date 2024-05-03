import React from "react";

const CartItem = ({ itemName, price, image, description }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
        <div className="w-20 h-20 mr-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={itemName}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{itemName}</h3>
          <p className="text-gray-600">{description}</p>
          <p className="text-gray-800 font-semibold">₹ {price / 100}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
