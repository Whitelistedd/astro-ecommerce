import Category1 from "/assets/shared/image-category-thumbnail-headphones.png";
import arrowSRC from "assets/shared/arrowRight.svg";
import styles from "./Category.module.less";

interface CategoryProps {
  item: string;
}

export const Category = ({ item }: CategoryProps) => {
  return (
    <a
      className={`btn3 ${styles.navItem}`}
      href={`/${item === "HOME" ? "" : item}`}
    >
      <div className={styles.navItem__ImageWrap}>
        <img
          className={styles.navItem__navImage}
          src={`/assets/shared/image-category-thumbnail-${item}.png`}
          alt={`img-${item}`}
          width="154px"
          height="144px"
        />
      </div>
      <div className={styles.navItem__details}>
        <li>
          <h6>{item.toUpperCase()}</h6>
        </li>
        <div className={`${styles.navItem__arrowWrap}`}>
          <p>SHOP</p>
          <img src={arrowSRC} alt="arrow" />
        </div>
      </div>
    </a>
  );
};
