
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const apiEndpoint = 'https://hackathon-apis.vercel.app/api/products';

const Products = () => {
  interface Product {
    _id: string;
    productName: string;
    price: number;
    image: string;
    description: string;
    rating: number;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        const data = response.data;
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProductsData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product._id} className="bg-white shadow-md rounded p-4">
            <Image src={product.image} alt={product.productName} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-lg font-bold mb-2">{product.productName}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">Price: ${product.price}</p>
            <p className="text-lg font-bold mt-2">Rating: {product.rating}⭐5</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Buy Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
