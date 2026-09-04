import styles from "./StepGraphics.module.css";

const StepGraphics = ({currentStep}: {currentStep: number}) => {
  return (
    <div className={styles.stepGraphicsContainer}>
  <div className={styles.stepContainer}>
    <div className={`${styles.circle} ${styles.circleHighlighted}`}>1</div>
    <span className={styles.labelHighlighted}>Personal info</span>
  </div>

  <div className={`${styles.line} ${currentStep > 1 ? styles.lineHighlighted : ""}`} />

  <div className={styles.stepContainer}>
    <div className={`${styles.circle} ${currentStep > 1 ? styles.circleHighlighted : ""}`}>2</div>
    <span className={currentStep > 1 ? styles.labelHighlighted : ""}>Address</span>
  </div>

  <div className={`${styles.line} ${currentStep > 2 ? styles.lineHighlighted : ""}`} />

  <div className={styles.stepContainer}>
    <div className={`${styles.circle} ${currentStep > 2 ? styles.circleHighlighted : ""}`}>3</div>
    <span className={currentStep > 2 ? styles.labelHighlighted : ""}>Confirm</span>
  </div>
</div>
  );
};

export default StepGraphics;