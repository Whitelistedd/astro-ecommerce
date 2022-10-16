import { CartItem } from "../../CartItem/CartItem";
import React from "react";
import { shoppingCart } from "stores/cart";
import styles from "./Summary.module.less";
import { useStore } from "@nanostores/react";

interface SummaryProps {
  cartTotal: number;
}

export const Summary = ({ cartTotal }: SummaryProps) => {
  const cartItems = useStore(shoppingCart).products;

  return (
    <div className={styles.sumContainer}>
      <p className={styles.sumContainer__title}>SUMMARY</p>
      <div className={styles.sumContainer__cartItems}>
        {cartItems?.map((cartItem, index) => (
          <CartItem
            key={`cart-item-${index}`}
            image={cartItem.image}
            name={cartItem.shortName}
            price={cartItem.price}
            quantity={cartItem.quantity}
          />
        ))}
      </div>
      <div className={styles.sumContainer__priceContainer}>
        <div className={styles.sumContainer__priceRow}>
          <p className={styles.sumContainer__priceName}>TOTAL</p>
          <p>$ {cartTotal && cartTotal}</p>
        </div>
        <div className={styles.sumContainer__priceRow}>
          <p className={styles.sumContainer__priceName}>SHIPPING</p>
          <p>$ 50</p>
        </div>
        <div className={styles.sumContainer__priceRow}>
          <p className={styles.sumContainer__priceName}>VAT (INCLUDED)</p>
          <p>$ 1079</p>
        </div>
        <div className={styles.sumContainer__totalRow}>
          <p className={styles.sumContainer__priceName}>GRAND TOTAL</p>
          <p className={styles.sumContainer__grandPrice}>
            $ {cartTotal && cartTotal + 50 + 1079}
          </p>
        </div>
      </div>
      <button className={`btn ${styles.sumContainer__submit}`} type="submit">
        CONTINUE & PAY
      </button>
    </div>
  );
};
