import React, { useEffect, useState } from "react";
import { addQuantity, removeQuantity, shoppingCart } from "stores/cart";

import { ItemQuantity } from "components/shared/ItemQuantity/ItemQuantity";
import styles from "./CartItem.module.less";

interface CartItemProps {
  id: number;
  img: string;
  name: string;
  amount: number;
  qty: number;
}

export const CartItem = ({ id, img, name, amount, qty }: CartItemProps) => {
  const [quantity, setQuantity] = useState(qty ? qty : 1);

  const handleQuantity = (type: string) => {
    if (type === "rem" && quantity - 1 === 0) {
      removeQuantity(id);
    } else if (type === "add") {
      setQuantity((prev) => prev + 1);
      addQuantity(id);
    } else if (type === "rem") {
      setQuantity((prev) => prev - 1);
      removeQuantity(id);
    }
  };

  useEffect(() => {
    setQuantity(qty);
  }, [qty]);

  return (
    <div className={styles.container}>
      <div className={styles.container__itemImageWrap}>
        <img
          className={styles.container__itemImage}
          src={img}
          alt={`${name}-image`}
        />
      </div>
      <div className={styles.container__itemInfo}>
        <p className={styles.container__itemName}>{name}</p>
        <p className={styles.container__itemAmount}>$ {amount}</p>
      </div>
      <ItemQuantity
        className={styles.container__itemQuantity}
        handleQuantity={handleQuantity}
        quantity={quantity}
      />
    </div>
  );
};
