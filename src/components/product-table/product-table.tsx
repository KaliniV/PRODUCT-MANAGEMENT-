import styles from "./styles.module.css";

interface Product {
  name: string;
  price: number;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  if (products.length === 0) {
    return <p>Nenhum produto cadastrado.</p>;
  }

  return (
    <div className={styles.table_container}>
      <h1 className={styles.table_title}>Listagem de produtos</h1>
      <table className={styles.product_table}>
        <thead>
          <tr className={styles.table_header}>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className={styles.table_row}>
              <td>{product.name}</td>
              <td>R$ {product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
