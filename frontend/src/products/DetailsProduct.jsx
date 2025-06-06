import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { toast } from "sonner";
import ProductsLike from "./ProductsLike";

const bestProducts = [
  {
    _id: 1,
    name: "Lotus Bisoff Chiller",
    price: 230.0,
    originalPrice: 159.0,
    description: "Baby-chan? Hai! Nani gasuki Chokominto yori mo a-na-ta",
    category: [["Dougnut"], ["Beverage", "Refreshers"]],
    sizes: ["S", "M", "L"],
    img: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063px-MGCC-KK-Fizzy-Lemonades-2.jpg",
        altText: "Lotus Bisoff Chiller",
      },
    ],
  },
  {
    _id: 2,
    name: "Bef4re I legt u go",
    price: 630.0,
    originalPrice: 600.0,
    description: "Miss mo na?",
    category: [["Dougnut"], ["Beverage", "Refreshers"]],
    sizes: ["S", "M", "L"],
    img: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/Original-Lemonade.jpg",
        altText: "Lotus Bisoff Chiller",
      },
    ],
  },
];

const similarProduct = [
  {
    _id: 1,
    name: "product 1",
    price: 200.0,
    image: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/Americano.jpg",
        altText: "before",
      },
    ],
  },
  {
    _id: 2,
    name: "product 2",
    price: 200.0,
    image: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063%20MGCC%20KK%20Craving%20Cheesecake_6%20astd.jpg",
        altText: "before",
      },
    ],
  },
  {
    _id: 3,
    name: "product 3",
    price: 200.0,
    image: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063%20MGCC%20KK%20Craving%20Cheesecake_6%20mixed.jpg",
        altText: "before",
      },
    ],
  },
  {
    _id: 4,
    name: "product 4",
    price: 200.0,
    image: [
      {
        url: "https://mgi-deliveryportal.s3.amazonaws.com/group-6-astd.jpg",
        altText: "before",
      },
    ],
  },
];

const DetailsProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [switchImage, setSwitchImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const product = bestProducts[selectedProduct];

  useEffect(() => {
    const defaultProduct = bestProducts[selectedProduct].img?.[0]?.url;
    if (defaultProduct) {
      setSwitchImage(defaultProduct);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (galaw) => {
    if (galaw === "plus") setQuantity((prev) => prev + 1);
    if (galaw === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to pot...", {
        duration: 2000,
      });
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 2000,
      });

      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-whtie p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {/* {IMAGE SA GEDLI} */}
            {bestProducts.map((product, index) => (
              <img
                key={index}
                src={product?.img[0].url}
                alt={product?.img[0].altText || `Thumbnail ${index}`}
                onClick={() => {
                  setSwitchImage(product?.img[0].url);
                  setSelectedProduct(index);
                }}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  switchImage === product?.img[0].url
                    ? "border-slate-900"
                    : "border-white"
                }`}
              />
            ))}
          </div>

          {/* main iamge natin */}

          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={switchImage || product?.img[0].url}
                alt="Best"
                className="w-full h-[450px] object-cover rounded-lg border "
              />
            </div>
          </div>

          {/* mobile view to ah */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {bestProducts?.map((product, index) => (
              <img
                key={index}
                src={product?.img[0].url}
                alt={product?.img?.altText || `Thumbnail ${index}`}
                onClick={() => {
                  setSwitchImage(product?.img[0].url);
                  setSelectedProduct(index);
                }}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  switchImage === product?.img[0].url
                    ? "border-slate-900"
                    : "border-white"
                }`}
              />
            ))}
          </div>

          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-red-600 mb-1 line-through">
              {product.originalPrice &&
                `${product.originalPrice.toLocaleString("en-PH", {
                  style: "currency",
                  currency: "PHP",
                })}`}
            </p>
            <p className="text-xl text-gray-700 mb-2">
              {product.price.toLocaleString("en-PH", {
                style: "currency",
                currency: "PHP",
              })}
            </p>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">Sizes:</p>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    onClick={() => setSelectedSize(size)}
                    key={size}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center m-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="border rounded border-gray-400 p-2 text-lg font-medium"
                >
                  <HiMinus className="size-4" />
                </button>
                <span className="text-2xl text-gray-700 mx-4">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="border border-gray-400 rounded p-2 text-lg font-medium"
                >
                  <GoPlus className="size-4" />
                </button>
              </div>
            </div>

            <button
              disabled={isButtonDisabled}
              onClick={handleAddToCart}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>

            <div className="mt-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-700">
                Categories
              </h3>
              <p className="text-lg font-medium text-gray-600">
                {product.category[1].join(", ")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl text-center font-semibold mb-4">
            Baka Gusto Mo Lang
          </h2>
          <ProductsLike products={similarProduct} />
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
