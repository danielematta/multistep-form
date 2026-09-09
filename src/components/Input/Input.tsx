import styles from "./Input.module.css";

type InputProps = {
    label: string;
    idName: string;
    type: React.HTMLInputTypeAttribute;
    value: string;
    error: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({label, idName, type, value, error, onChange, ...props}: InputProps) => {
  return (
    <div className={styles.inputComponent}>
      <label className={styles.inputLabel} htmlFor={idName}>
        {label}
      </label>
      <input
        className={`${styles.input} ${error !== undefined ? styles.error : ""} `}
        type={type}
        id={idName}
        name={idName}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
