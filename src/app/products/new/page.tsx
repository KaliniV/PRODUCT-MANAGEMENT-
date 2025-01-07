import ProductForm from "@/components/product-form/product-form";
import styles from "./styles.module.css";
export default function NewProduct() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastrar produto</h1>
      <ProductForm />
    </div>
  );
}
