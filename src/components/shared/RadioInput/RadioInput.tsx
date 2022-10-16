import React from "react";
import styles from "./RadioInput.module.less";

interface RadioInputProps {
  name: string;
  value: string;
  label: string;
  register: any;
  onChange: (type: string) => void;
  checked?: string | boolean;
}

export const RadioInput = ({
  name,
  value,
  label,
  register,
  checked,
  onChange,
}: RadioInputProps) => {
  return (
    <div onClick={() => onChange(value)} className={styles.container}>
      <div
        className={`${checked === value ? styles.container__wrapChecked : ""} ${
          styles.container__wrap
        }`}
      >
        <input
          id={value}
          className={styles.container__input}
          {...register(`${name}`, {
            required: true,
          })}
          type="radio"
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <label htmlFor={value} className={styles.container__label}>
          {label}
        </label>
      </div>
    </div>
  );
};
