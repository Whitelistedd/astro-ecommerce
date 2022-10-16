import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

import styles from "./Input.module.less";

interface InputProps {
  register: any;
  label: string;
  className?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const Input = ({ register, label, className }: InputProps) => {
  return (
    <div className={`${className} ${styles.container}`}>
      <label className={styles.container__label}>{label}</label>
      <input
        className={styles.container__input}
        {...register(
          `${label}`.toLowerCase().replaceAll(" ", "_").replaceAll("-", "_"),
          {
            required: true,
          }
        )}
      />
    </div>
  );
};
