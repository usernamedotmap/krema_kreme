import React, { useState } from "react";

const EditProduct = () => {
  const [productData, setProductsData] = useState({
    name: "",
    description: "",
    price: 0,
    sizes: [],
    images: [
      {
        url: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/64438d63b60f942297a010bf34ac30c2162ce98b-496x560.jpg?auto=format&fit=fill&q=80&w=290",
      },
      {
        url: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/49279f32616736aca748778c99c84bd2182f6695-496x560.jpg?auto=format&fit=fill&q=80&w=290",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductsData({ ...productData, [name]: value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(productData)
  }
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
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductsData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border borer-gray-300 p-3 rounded-xl"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image</label>
          <input type="file" onChange={handleImageUpload} />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img src={image.url} alt="images products" className="w-20 h-20 object-cover rounded-md shadow-md" />
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="w-full bg-green-500 text-white py-2  rounded-md hover:bg-green-700">Update Products</button>
      </form>
    </div>
  );
};

export default EditProduct;
