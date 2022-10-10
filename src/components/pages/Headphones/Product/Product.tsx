import styles from "./Product.module.less";

interface ProductProps {
  newProduct: boolean;
  name: string;
  desc: string;
  reverse: boolean;
  image: string;
}

export const Product = ({
  name,
  newProduct,
  desc,
  image,
  reverse,
}: ProductProps) => {
  return (
    <section className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.container__imageWrap}>
        <img
          className={styles.container__image}
          width="540"
          height="560"
          src={image}
        />
      </div>
      <article className={styles.container__details}>
        {newProduct && (
          <p className={`${styles.container__title} overline`}>NEW PRODUCT</p>
        )}
        <h2 className={styles.container__name}>{name}</h2>
        <p className={styles.container__desc}>{desc}</p>
        <button className={`btn1`}>SEE PRODUCT</button>
      </article>
    </section>
  );
};
