import styles from "./Product.module.less";

interface ProductProps {
  newProduct: boolean;
  name: string;
  desc: string;
  reverse: boolean;
  id: number;
  image: string;
}

export const Product = ({
  name,
  id,
  newProduct,
  desc,
  image,
  reverse,
}: ProductProps) => {
  return (
    <section
      className={`${styles.productContainer} ${reverse ? styles.reverse : ""}`}
    >
      <div className={styles.productContainer__imageWrap}>
        <img
          className={styles.productContainer__image}
          width="540"
          height="560"
          src={image}
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
        <a href={`/product/${name.replaceAll(" ", "-")}/${id}`}>
          <button className={`btn`}>SEE PRODUCT</button>
        </a>
      </article>
    </section>
  );
};
