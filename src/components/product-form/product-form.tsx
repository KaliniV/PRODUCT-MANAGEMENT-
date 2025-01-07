"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.css";

const ProductForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("sim");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    const newProduct = {
      name,
      description,
      price: parseFloat(price),
      available,
    };

    localStorage.setItem(
      "products",
      JSON.stringify([...existingProducts, newProduct])
    );
    router.push("/products");
  };

  return (
    <form className={styles.product_form} onSubmit={handleSubmit}>
      <div className={styles.form_item}>
        <label>Nome do produto:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.form_item}>
        <label>Descrição do produto:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className={styles.form_item}>
        <label>Valor do produto:</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className={styles.form_item}>
        <label>Disponível para venda:</label>
        <select
          value={available}
          onChange={(e) => setAvailable(e.target.value)}
        >
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </select>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default ProductForm;
