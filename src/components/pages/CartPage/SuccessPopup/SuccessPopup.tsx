import { AnimatePresence, motion } from "framer-motion";

import { CartItem } from "../CartItem/CartItem";
import React from "react";
import { shoppingCart } from "stores/cart";
import styles from "./SuccessPopup.module.less";
import successSRC from "assets/shared/success.svg";
import { useStore } from "@nanostores/react";

interface SuccessPopupProps {
  orderSuccess: boolean;
}

export const SuccessPopup = ({ orderSuccess }: SuccessPopupProps) => {
  const cartItems = useStore(shoppingCart).products;

  const handleRedirect = () => {
    window.location.href = "/";
  };

  return (
    <AnimatePresence>
      {orderSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.container}
        >
          <div className={styles.container__wrap}>
            <img className={styles.container__successIMG} src={successSRC} />
            <h4 className={styles.container__title}>
              THANK YOU FOR YOUR ORDER
            </h4>
            <p className={styles.container__desc}>
              You will receive an email confirmation shortly.
            </p>
            <div className={styles.container__totalWrap}>
              <div className={styles.container__productsList}>
                {cartItems[0] && (
                  <CartItem
                    image={cartItems[0].image}
                    name={cartItems[0].shortName}
                    price={cartItems[0].price}
                    quantity={cartItems[0].quantity}
                  />
                )}
                <p className={styles.container__productCount}>
                  and {cartItems.length - 1} other item(s)
                </p>
              </div>
              <div className={styles.container__grandTotal}>
                <p>GRAND TOTAL</p>
                <p>$ 5,446</p>
              </div>
            </div>
            <button
              onClick={() => handleRedirect()}
              className={`btn ${styles.container__button}`}
            >
              BACK TO HOME
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
