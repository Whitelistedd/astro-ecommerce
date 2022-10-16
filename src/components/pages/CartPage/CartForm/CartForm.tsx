import { CartItem } from "../CartItem/CartItem";
import { Input } from "components/shared/Input/Input";
import { RadioInput } from "components/shared/RadioInput/RadioInput";
import { Summary } from "./Summary/Summary";
import { shoppingCart } from "stores/cart";
import styles from "./CartForm.module.less";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useStore } from "@nanostores/react";

export const CartForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const cartTotal = useStore(shoppingCart).total;
  const [paymentMethod, setPaymentMethod] = useState("");

  const onSubmit = (data: any) => console.log(data);

  const handlePaymentChange = (paymentMethod: string) => {
    setPaymentMethod(paymentMethod);
    setValue("payment", paymentMethod);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <h1 className={styles.inputContainer__title}>CHECKOUT</h1>
        <div className={styles.inputContainer__inputList}>
          <p className={`subtitle`}>BILLING DETAILS</p>
          <div className={styles.inputContainer__billingInputs}>
            <Input register={register} label="Name" />
            <Input register={register} label="Email Address" />
            <Input register={register} label="Phone Number" />
          </div>
        </div>
        <div className={styles.inputContainer__inputList}>
          <p className={`subtitle`}>SHIPPING INFO</p>
          <div className={styles.inputContainer__shippingInputs}>
            <Input
              className={styles.inputContainer__maxInput}
              register={register}
              label="Address"
            />
            <Input
              className={styles.inputContainer__input}
              register={register}
              label="ZIP Code"
            />
            <Input
              className={styles.inputContainer__input}
              register={register}
              label="City"
            />
            <Input
              className={styles.inputContainer__iInput}
              register={register}
              label="Country"
            />
          </div>
        </div>
        <div className={styles.inputContainer__paymentContainer}>
          <p className={`subtitle`}>PAYMENT DETAILS</p>
          <div className={styles.inputContainer__paymentRadio}>
            <RadioInput
              onChange={handlePaymentChange}
              register={register}
              label="e-Money"
              name="payment"
              value="eMoney"
              checked={paymentMethod}
            />
            <RadioInput
              onChange={handlePaymentChange}
              register={register}
              label="Cash on Delivery"
              name="payment"
              value="cashOnDelivery"
              checked={paymentMethod}
            />
          </div>
          <Input
            className={styles.inputContainer__input}
            register={register}
            label="e-Money Number"
          />
          <Input
            className={styles.inputContainer__iInput}
            register={register}
            label="e-Money PIN"
          />
        </div>
      </div>
      <Summary cartTotal={cartTotal} />
    </form>
  );
};
