import styles from "./MultiStepFormHandler.module.css";
import { useState } from "react";
import StepGraphics from "../StepGraphics/StepGraphics";
import Form from "../Form/Form";
import {
  type FormValuesTypes,
  type HandleFormValueChangeParams,
  type FormValueErrorsTypes,
} from "../../types/types";
import {
  initialFormValues,
  initialFormValueErrors,
} from "../../constants/formConstants";
import {
  step1Validator,
  step2Validator,
} from "../../validators/stepValidators";
import { createPortal } from "react-dom";
import SubmitModal from "../SubmitModal/SubmitModal";

type HandleFormValuesErrorsProps = {
  values: FormValuesTypes;
  currentStep: number;
};

const MultiStepFormHandler = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formValues, setFormValues] =
    useState<FormValuesTypes>(initialFormValues);
  const [formValuesErrors, setFormValuesErrors] =
    useState<FormValueErrorsTypes>(initialFormValueErrors);
    const [submitModalStatus, setSubmitModalStatus] = useState<boolean>(false);

  const handleFormValueChange = (newData: HandleFormValueChangeParams) => {
    if ("birthdate" in newData) {
      setFormValues((prevState) => ({
        ...prevState,
        birthdate: newData.birthdate,
      }));
      setFormValuesErrors((prevState) => ({
        ...prevState,
        birthdate: undefined,
      }));
    } else {
      const { name, value, type, checked } = newData.target;
      setFormValues((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
      setFormValuesErrors((prevState) => ({
        ...prevState,
        [name]: undefined,
      }));
    }
  };

  const handleFormValuesErrors = ({
    values,
    currentStep,
  }: HandleFormValuesErrorsProps) => {
    if (currentStep === 1) {
      const step1Errors = step1Validator(values);
      setFormValuesErrors((prevState) => ({
        ...prevState,
        ...step1Errors,
      }));
      return step1Errors;
    }
    const step2Errors = step2Validator(values);
    setFormValuesErrors((prevState) => ({
      ...prevState,
      ...step2Errors,
    }));
    return step2Errors;
  };

  const handleNextButton = () => {
    const errors = handleFormValuesErrors({
      values: formValues,
      currentStep,
    });
    if (Object.values(errors).some((error) => error !== undefined)) {
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBackButton = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitModalStatus(true);
  }

  const handleSubmitModal = () => {
    setSubmitModalStatus((prev) => !prev);
  };

  const handleFormReset = () => {
    setFormValues(initialFormValues);
    setCurrentStep(1);
  }

  return (
    <>
      <StepGraphics currentStep={currentStep} />
      <Form
        currentStep={currentStep}
        formValues={formValues}
        formValuesErrors={formValuesErrors}
        handleFormValueChange={handleFormValueChange}
        onSubmit={handleSubmit}
      />

      {currentStep === 1 && (
        <div className={styles.rightButtonSoloContainer}>
          <button
            className={`${styles.rightButton} ${styles.rightButtonSolo}`}
            onClick={handleNextButton}
          >
            Next
          </button>
        </div>
      )}
      {currentStep === 2 && (
        <div className={styles.buttonContainer}>
          <button className={styles.leftButton} onClick={handleBackButton}>
            Back
          </button>
          <button className={styles.rightButton} onClick={handleNextButton}>
            Next
          </button>
        </div>
      )}
      {currentStep === 3 && (
        <div className={styles.buttonContainer}>
          <button className={styles.leftButton} onClick={handleBackButton}>
            Back
          </button>
          <button className={styles.rightButton} type="submit" form="form">Confirm</button>
        </div>
      )}
      {submitModalStatus && createPortal(<SubmitModal isOpen={submitModalStatus} onClose={handleSubmitModal} formReset={handleFormReset} />, document.body)}
    </>
  );
};
export default MultiStepFormHandler;
