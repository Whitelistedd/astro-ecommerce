import { Input } from "components/shared/Input/Input";
import { shoppingCart } from "stores/cart";
import styles from "./CartForm.module.less";
import { useForm } from "react-hook-form";
import { useStore } from "@nanostores/react";

export const CartForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const cartItems = useStore(shoppingCart).products;
  const cartTotal = useStore(shoppingCart).total;

  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <h1 className={styles.inputContainer__title}>CHECKOUT</h1>
        <div className={styles.inputContainer__inputWrap}>
          <Input register={register} label="Name" error={errors.name} />
          <input {...register("exampleRequired", { required: true })} />
          <input {...register("exampleRequired", { required: true })} />
        </div>
      </div>
      <div className={styles.sumContainer}>
        <p>SUMMARY</p>
        <div>
          <p>TOTAL</p>
          <p>{cartTotal}</p>
        </div>
      </div>
    </form>
  );
};
