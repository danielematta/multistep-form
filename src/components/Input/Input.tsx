import styles from "./Input.module.css";

type InputProps = {
    label: string;
    idName: string;
    type: React.HTMLInputTypeAttribute;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({label, idName, type, onChange, ...props}: InputProps) => {
  return (
    <div className={styles.inputComponent}>
      <label className={styles.inputLabel} htmlFor={idName}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={idName}
        name={idName}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
