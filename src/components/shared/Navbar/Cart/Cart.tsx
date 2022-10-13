import { AnimatePresence, motion } from "framer-motion";

import React from "react";
import { productList } from "constants/products";
import { shoppingCart } from "stores/cart";
import styles from "./Cart.module.less";

interface CartProps {
  handleCartMenu: () => void;
  showCartMenu: boolean;
}

export const Cart = ({ showCartMenu, handleCartMenu }: CartProps) => {
  const cartItems = shoppingCart.get();
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
            <p className={styles.cartContainer__greyColor}>Remove all</p>
          </div>
          <div></div>
          <div className={styles.cartContainer__totalWrap}>
            <p className={styles.cartContainer__greyColor}>TOTAL</p>
            <strong className={styles.cartContainer__boldText}>$ 5,396</strong>
          </div>
          <button className={`btn ${styles.cartContainer__checkoutBtn}`}>
            CHECKOUT
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
