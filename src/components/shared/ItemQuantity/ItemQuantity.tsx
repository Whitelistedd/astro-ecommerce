import React from "react";
import styles from "./ItemQuantity.module.less";

interface ItemQuantityProps {
  handleQuantity: (type: string) => void;
  quantity: number;
  className?: string;
}

export const ItemQuantity = ({
  handleQuantity,
  quantity,
  className,
}: ItemQuantityProps) => {
  return (
    <div className={`${className} ${styles.quantityWrap}`}>
      <p
        onClick={() => handleQuantity("rem")}
        className={styles.quantityWrap__quantityType}
      >
        -
      </p>
      <p className={styles.quantityWrap__quantityNumber}>{quantity}</p>
      <p
        onClick={() => handleQuantity("add")}
        className={styles.quantityWrap__quantityType}
      >
        +
      </p>
    </div>
  );
};
