import styles from "./StepHandler.module.css";
import { useState } from "react";
import StepGraphics from "../StepGraphics/StepGraphics";
import Form from "../Form/Form";

const StepHandler = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleBackButton = () => {
    setCurrentStep(prev => prev - 1);
  }

  const handleNextButton = () => {
    setCurrentStep(prev => prev + 1);
  }

  return (
    <>
      <StepGraphics currentStep={currentStep} />
      <Form currentStep={currentStep} />

      {currentStep === 1 && (
        <div className={styles.rightButtonSoloContainer}>
        <button className={`${styles.rightButton} ${styles.rightButtonSolo}`} onClick={handleNextButton}>Next</button>
        </div>
      )}
      {currentStep === 2 && (
        <div className={styles.buttonContainer}>
          <button className={styles.leftButton} onClick={handleBackButton}>Back</button>
          <button className={styles.rightButton} onClick={handleNextButton}>Next</button>
        </div>
      )}
      {currentStep === 3 && (
        <div className={styles.buttonContainer}>
          <button className={styles.leftButton} onClick={handleBackButton}>Back</button>
          <button className={styles.rightButton}>Confirm</button>
        </div>
      )}
    </>
  );
};
export default StepHandler;
