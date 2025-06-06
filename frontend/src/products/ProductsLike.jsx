import React from "react";
import { Link } from "react-router-dom";

const ProductsLike = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-[200px] mb-4">
              <img
                src={product?.image[0]?.url}
                alt={product?.image[0]?.altText || product.name}
                className="w-md h-[200px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-lg mb-2 capitalize">{product.name}</h3>
            <p className="text-gray-500 font-medium text-md tracking-tighter">{(product.price).toLocaleString("en-PH", {
                currency: "PHP",
                style: "currency"
            })}</p>
          </div>
        </Link>
      ))}
    </div>
    
  );
};

export default ProductsLike;
