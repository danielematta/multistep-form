import styles from "./FormLayout.module.css";
import MultiStepFormHandler from "../../components/MultiStepFormHandler/MultiStepFormHandler";

const FormLayout = () => {
  return (
    <div className={styles.formLayout}>
      <h1 className={styles.title}>Multi-step form</h1>
      <MultiStepFormHandler />
    </div>
  );
};

export default FormLayout;