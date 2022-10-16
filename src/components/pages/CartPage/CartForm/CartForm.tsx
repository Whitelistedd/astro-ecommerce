import { CartItem } from "../CartItem/CartItem";
import { Input } from "components/shared/Input/Input";
import { RadioInput } from "components/shared/RadioInput/RadioInput";
import { SuccessPopup } from "../SuccessPopup/SuccessPopup";
import { Summary } from "./Summary/Summary";
import { shoppingCart } from "stores/cart";
import styles from "./CartForm.module.less";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useStore } from "@nanostores/react";

const shippingInputList = ["Address", "ZIP Code", "City", "Country"];

export const CartForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      payment: "eMoney",
    },
  });
  const cartTotal = useStore(shoppingCart).total;
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);

  const onSubmit = (data: any) => setOrderSuccess(true);

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
            <Input register={register} error={errors} label="Name" />
            <Input
              register={register}
              type="email"
              error={errors}
              label="Email Address"
            />
            <Input register={register} error={errors} label="Phone Number" />
          </div>
        </div>
        <div className={styles.inputContainer__inputList}>
          <p className={`subtitle`}>SHIPPING INFO</p>
          <div className={styles.inputContainer__shippingInputs}>
            {shippingInputList.map((input, index) => (
              <Input
                error={errors}
                className={
                  index === 0
                    ? styles.inputContainer__maxInput
                    : styles.inputContainer__input
                }
                register={register}
                label={input}
              />
            ))}
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
      <SuccessPopup orderSuccess={orderSuccess} />
    </form>
  );
};
