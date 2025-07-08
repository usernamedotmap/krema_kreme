import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchProductDetails,
  updateProduct,
} from "../../redux/slices/productSlice";
import axios from "axios";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );

  const [productData, setProductsData] = useState({
    name: "",
    description: "",
    price: 0,
    sizes: [],
    images: [],
  });

  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Uploaded image data:", data);
      setProductsData((prevData) => ({
        ...prevData,
        images: [...prevData.images, { url: data.imageUrl, altText: "" }],
      }));
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedProduct) {
      setProductsData(selectedProduct);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductsData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id, productData }));
    navigate("/admin/products");
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit Your Product</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl py-2 px-3"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            type="text"
            name="description"
            value={productData.description}
            rows={4}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl py-4 px-3"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border borer-gray-300 p-3 rounded-xl"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.map((size) => size.label).join(", ")}
            onChange={(e) =>
              setProductsData({
                ...productData,
                sizes: e.target.value.split(",").map((label) => ({
                  label: label.trim(),
                  additonalPrice: 0,
                })),
              })
            }
            className="w-full border borer-gray-300 p-3 rounded-xl"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image</label>
          <input type="file" onChange={handleImageUpload} />

          {uploading && <p>Uploading image...</p>}
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image?.url}
                  alt="images products"
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2  rounded-md hover:bg-green-700"
        >
          Update Products
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
