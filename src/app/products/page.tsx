"use client";

import { useRouter } from "next/navigation";
import ProductTable from "../../components/product-table/product-table";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface Product {
  name: string;
  price: number;
  description: string;
  available: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    ) as Product[];
    setProducts(storedProducts);
  }, []);

  return (
    <div className={styles.container}>
      <ProductTable products={products} />
      <button onClick={() => router.push("/products/new")}>
        Cadastrar produto
      </button>
    </div>
  );
}
