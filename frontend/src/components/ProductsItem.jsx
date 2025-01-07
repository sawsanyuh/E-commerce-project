import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";

const ProductsItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate(`/product/${id}`); // Navigate to the product page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
  };

  return (
    <div
      className="text-gray-700 cursor-pointer"
      onClick={handleClick} // Attach the click handler
    >
      {/* Responsive container for the image */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 flex items-center justify-center border overflow-hidden">
        <img
          src={image && image[0] ? image[0] : "placeholder-image-url"}
          alt={name || "Product"}
          className="max-w-full max-h-full object-contain hover:scale-110 transition ease-in-out"
        />
      </div>
      {/* Product name */}
      <p className="pt-3 pb-1 text-sm md:text-base">{name}</p>
      {/* Product price */}
      <p className="text-sm md:text-base font-medium">
        {currency}
        {price}
      </p>
    </div>
  );
};

export default ProductsItem;
