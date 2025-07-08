import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({products, loading, error}) => {
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: {error}</p>
  }
  return (
    <div className="grid grid-cols-2 justify-center sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-full mb-4f">
              <img
                src={product?.images[0]?.url}
                alt={product?.images[0]?.altText || product.name}
                className="w-full h-[full] object-cover rounded-lg shadow-lg "
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
  )
}

export default ProductGrid