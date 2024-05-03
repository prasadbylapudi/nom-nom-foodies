import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toaster({ message }) {
  const notify = () => toast(message);
  console.log("toaster called");
  return (
    <div>
      <ToastContainer />
    </div>
  );
}
