import styles from "./SingleProduct.module.less";
import { useState } from "react";

interface ProductProps {
  newProduct: boolean;
  name: string;
  desc: string;
  price: number;
  id: number;
  image: string;
}

export const SingleProduct = ({
  name,
  id,
  price,
  newProduct,
  desc,
  image,
}: ProductProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: string) => {
    if (type === "rem" && quantity - 1 === 0) return;
    type === "add"
      ? setQuantity((prev) => prev + 1)
      : setQuantity((prev) => prev - 1);
  };

  return (
    <section className={styles.productContainer}>
      <div className={styles.productContainer__imageWrap}>
        <img
          className={styles.productContainer__image}
          src={image}
          width="540"
          height="560"
        />
      </div>
      <article className={styles.productContainer__details}>
        {newProduct && (
          <p className={`${styles.productContainer__title} overline`}>
            NEW PRODUCT
          </p>
        )}
        <h2 className={styles.productContainer__name}>{name}</h2>
        <p className={styles.productContainer__desc}>{desc}</p>
        <p className={styles.productContainer__price}>$ {price}</p>
        <div className={styles.productContainer__purchaseWrap}>
          <div className={styles.productContainer__quantityWrap}>
            <p
              onClick={() => handleQuantity("rem")}
              className={styles.productContainer__quantityType}
            >
              -
            </p>
            <p className={styles.productContainer__quantityNumber}>
              {quantity}
            </p>
            <p
              onClick={() => handleQuantity("add")}
              className={styles.productContainer__quantityType}
            >
              +
            </p>
          </div>
          <a href={`/product/${name.replaceAll(" ", "-")}/${id}`}>
            <button className={`btn`}>ADD TO CART</button>
          </a>
        </div>
      </article>
    </section>
  );
};
