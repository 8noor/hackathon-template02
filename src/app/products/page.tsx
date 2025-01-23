"use client";

import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/queries";
import Link from "next/link";  // Fixed import path
import Image from "next/image";
import { useState, useEffect } from "react";


// Define Product type with specific types
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
  slug: { current: string };  // Corrected type
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await sanityFetch({ query: allProducts });
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="p-4 bg-purple-200">
      <h1 className="text-center text-slate-800 mt-4 mb-6 text-2xl font-bold">
      Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={product.id || `product-${index}`} className="bg-white shadow-md rounded-lg p-4">
            <Link href={`/products/${product.slug?.current}`}>

              <Image
                src={product.imageUrl || "/placeholder.jpg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
                loading="lazy"
              />
            </Link>
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-slate-800 mt-2 text-sm">
                {product.description.length > 100
                  ? `${product.description.substring(0, 100)}...`
                  : product.description}
              </p>

              <div className="flex justify-center items-center mt-4">
                <p className="text-slate-600 font-bold">${product.price}</p>
                {product.discountPercentage > 0 && (
                  <p className="text-sm text-green-500 ml-2">
                    {product.discountPercentage}% OFF
                  </p>
                )}
              </div>

              <button 
                onClick={() => addToCart(product)} 
                className="mt-4 w-full bg-purple-500 text-white py-2 rounded-md  hover:bg-purple-700 transition-colors">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-slate-900 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-orange-500">
          Products Added To Cart
        </h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
                <div>
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={`Cart item: ${item.name}`}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your cart is empty. Please add products.
          </p>
        )}
      </div>
    </div>
  );
}
