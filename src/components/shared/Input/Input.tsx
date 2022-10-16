import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

import styles from "./Input.module.less";

interface InputProps {
  register: any;
  label: string;
  className?: string;
  type?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const Input = ({
  register,
  label,
  className,
  error,
  type,
}: InputProps) => {
  return (
    <div
      className={`${className} ${error && styles.container_error} ${
        styles.container
      }`}
    >
      <label className={styles.container__label}>{label}</label>
      <input
        aria-invalid={error}
        className={styles.container__input}
        type={type ? type : "text"}
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
