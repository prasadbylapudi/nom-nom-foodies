import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div className="m-4 p-4 text-center">
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="text-center font-bold ">
            Your Cart is empty! Add items to the Cart
          </h1>
        )}
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            itemName={item.name}
            description={item.description}
            price={item.price}
            image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.imageId}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
