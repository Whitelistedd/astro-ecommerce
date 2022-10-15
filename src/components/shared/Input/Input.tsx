interface InputProps {
  register: any;
  label: string;
  error?: string;
}

export const Input = ({ register, label, error }: InputProps) => {
  return <input {...register("exampleRequired", { required: true })} />;
};
