import React from "react";
import styles from "./CartItem.module.less";

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export const CartItem = ({ image, name, price, quantity }: CartItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__imgWrap}>
        <img className={styles.container__img} src={image} />
      </div>
      <div className={styles.container__details}>
        <p className={styles.container__name}>{name}</p>
        <p className={styles.container__price}>$ {price}</p>
      </div>
      <div className={styles.container__quantity}>
        <p>x{quantity}</p>
      </div>
    </div>
  );
};
