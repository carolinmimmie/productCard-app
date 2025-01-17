"use client";

import { data } from "./data/products";

import "@smastrom/react-rating/style.css";

import ProductItem from "./components/ProductItem";

export default function Home() {
  const { products } = data;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
