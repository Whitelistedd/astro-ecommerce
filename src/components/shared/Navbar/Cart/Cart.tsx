import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

import { CartItem } from "./CartItem/CartItem";
import { productList } from "constants/products";
import { shoppingCart } from "stores/cart";
import styles from "./Cart.module.less";
import { useStore } from "@nanostores/react";

interface CartProps {
  handleCartMenu: () => void;
  showCartMenu: boolean;
}

export const Cart = ({ showCartMenu, handleCartMenu }: CartProps) => {
  const cartItems = useStore(shoppingCart).products;
  const cartTotal = useStore(shoppingCart).total;

  const emptyCart = () => {
    shoppingCart.setKey("products", []);
    shoppingCart.setKey("total", 0);
  };

  return (
    <AnimatePresence>
      {showCartMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.cartContainer}
        >
          <div className={styles.cartContainer__header}>
            <strong className={styles.cartContainer__boldText}>CART (3)</strong>
            <p
              onClick={() => emptyCart()}
              className={styles.cartContainer__greyColor}
            >
              Remove all
            </p>
          </div>
          <div className={styles.cartContainer__cartItems}>
            {cartItems.map((item) => (
              <CartItem
                id={item.id}
                name={item.shortName}
                img={item.image}
                amount={item.price}
                qty={item.quantity}
              />
            ))}
          </div>
          <div className={styles.cartContainer__totalWrap}>
            <p className={styles.cartContainer__greyColor}>TOTAL</p>
            <strong className={styles.cartContainer__boldText}>
              $ {cartTotal}
            </strong>
          </div>
          <a href="/cart">
            <button className={`btn ${styles.cartContainer__checkoutBtn}`}>
              CHECKOUT
            </button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
