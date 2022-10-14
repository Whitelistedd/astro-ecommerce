import { addProduct, shoppingCart } from "stores/cart";

import { ItemQuantity } from "components/shared/ItemQuantity/ItemQuantity";
import { productList } from "constants/products";
import styles from "./SingleProduct.module.less";
import { useState } from "react";

interface ProductProps {
  newProduct: boolean;
  name: string;
  desc: string;
  price: number;
  id: number;
  image: string;
  features: string[];
  shortName: string;
  extraImages: string[];
  inside: {
    quantity: number;
    name: string;
  }[];
}

export const SingleProduct = ({
  name,
  id,
  price,
  newProduct,
  desc,
  image,
  features,
  inside,
  shortName,
  extraImages,
}: ProductProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: string) => {
    if (type === "rem" && quantity - 1 === 0) return;
    type === "add"
      ? setQuantity((prev) => prev + 1)
      : setQuantity((prev) => prev - 1);
  };

  const handleAddItemToCart = async () => {
    const product = {
      id,
      name,
      price,
      newProduct,
      desc,
      image,
      features,
      inside,
      shortName,
      extraImages,
      quantity,
    };
    await addProduct(product);
    shoppingCart.set([...shoppingCart.get()]);
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
          <ItemQuantity handleQuantity={handleQuantity} quantity={quantity} />
          <a>
            <button onClick={() => handleAddItemToCart()} className={`btn`}>
              ADD TO CART
            </button>
          </a>
        </div>
      </article>
    </section>
  );
};
