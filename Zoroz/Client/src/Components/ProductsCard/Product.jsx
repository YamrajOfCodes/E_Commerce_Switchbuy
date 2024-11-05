import React from 'react'
import "./product.css"
import { Link } from 'react-router-dom'
const Product = ({id,productname,price,description,category,image}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-6 hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={`${productname} image`}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Description Section */}
      <div className="p-4 flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold mb-2">{productname}</h2>
        <p className="text-gray-600 text-sm mb-4">
          {description.length > 100 ? `${description.slice(0, 100)}...` : description}
        </p>
        <p className="text-lg font-bold text-blue-600 mb-4">${price}</p>

        {/* Add to Cart Button */}
        <Link to={`/products/${id}`}>
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Product
