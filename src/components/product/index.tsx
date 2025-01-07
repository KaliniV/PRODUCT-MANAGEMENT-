"use client";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
export const Product = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Bem-vindo ao Cadastro e Listagem de Produtos{" "}
        <span className={styles.span}>OAK Tech</span>
      </h1>
      <section className={styles.buttons}>
        <button onClick={() => router.push("/products")}>Ver produtos</button>
        <button onClick={() => router.push("/products/new")}>
          Cadastrar novo produto
        </button>
      </section>
    </div>
  );
};
