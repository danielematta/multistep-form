import styles from "./FormLayout.module.css";
import StepHandler from "../../components/StepHandler/StepHandler";

const FormLayout = () => {
  return (
    <div className={styles.formLayout}>
      <h1 className={styles.title}>Multi-step form</h1>
      <StepHandler />
    </div>
  );
};

export default FormLayout;