import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { toast } from "sonner";
import ProductsLike from "./ProductsLike";
import ShopPage from "../pages/ShopPage";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchSimilarProducts,
} from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";

const DetailsProduct = ({ productId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );
  const { user, guestId } = useSelector((state) => state.auth);
  const [switchImage, setSwitchImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const productFetchId = productId || id;
  const basePrice = selectedProduct?.price || 0;
  const extra =
    typeof selectedSize === "object" ? selectedSize?.additionalPrice || 0 : 0;
  const finalPrice = basePrice + extra;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setSwitchImage(selectedProduct.images[0].url);
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

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        guestId,
        userId: user?._id,
      })
    )
      .then(() => {
        toast.success("Product added to cart", {
          duration: 2000,
        });
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="p-6">
      {selectedProduct && (
        <div className="max-w-6xl mx-auto bg-whtie p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="hidden md:flex flex-col space-y-4 mr-6">
              {/* {IMAGE SA GEDLI} */}
              {selectedProduct.images?.map((product, index) => (
                <img
                  key={index}
                  src={product.url}
                  alt={product.altText || `Thumbnail ${index}`}
                  onClick={() => {
                    setSwitchImage(product.url);
                  }}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    switchImage === product?.url
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
                  src={switchImage || selectedProduct?.images[0]?.url}
                  alt="Best"
                  className="w-full h-[450px] object-cover rounded-lg border "
                />
              </div>
            </div>

            {/* mobile view to ah */}
            <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
              {selectedProduct?.images?.map((product, index) => (
                <img
                  key={index}
                  src={product?.url}
                  alt={product?.altText || `Thumbnail ${index}`}
                  onClick={() => {
                    setSwitchImage(product?.url);
                    selectedProduct(index);
                  }}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    switchImage === product?.url
                      ? "border-slate-900"
                      : "border-white"
                  }`}
                />
              ))}
            </div>

            <div className="md:w-1/2 md:ml-10">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                {selectedProduct.name}
              </h1>
              <p className="text-lg text-red-600 mb-1 line-through">
                {selectedProduct.originalPrice &&
                  `${finalPrice.originalPrice.toLocaleString("en-PH", {
                    style: "currency",
                    currency: "PHP",
                  })}`}
              </p>
              <p className="text-xl text-gray-700 mb-2">
                {finalPrice.toLocaleString("en-PH", {
                  style: "currency",
                  currency: "PHP",
                })}
              </p>
              <p className="text-gray-600 mb-4">
                {selectedProduct.description}
              </p>

              <div className="mb-4">
                <p className="text-gray-700">Sizes:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      onClick={() => setSelectedSize(size)}
                      key={size.label}
                      className={`px-4 py-2 rounded border ${
                        selectedSize?.label === size.label
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {size.label}
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
                  <span className="text-2xl text-gray-700 mx-4">
                    {quantity}
                  </span>
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
                  {selectedProduct.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsProduct;
