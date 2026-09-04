import styles from "./Form.module.css";
import { type ReactNode } from "react";
import Input from "../Input/Input";
import DatePickerInput from "../DatePicker/DatePickerInput";

const Form = ({ currentStep }: {currentStep: number}) => {
  let formInputs: ReactNode;

  const handleFormValueChange = () => {};

  switch (currentStep) {
    case 1:
      formInputs = (
        <>
          <Input
            label="First name"
            idName="fName"
            type="text"
            onChange={handleFormValueChange}
          />
          <Input
            label="Last name"
            idName="lName"
            type="text"
            onChange={handleFormValueChange}
          />
          {/* <Input
            label="Date of birth"
            idName="birthdate"
            type="date"
            onChange={handleFormValueChange}
          /> */}

          <DatePickerInput />

          <Input
            label="Place of birth"
            idName="birthPlace"
            type="text"
            onChange={handleFormValueChange}
          />
          <Input
            label="Country of birth"
            idName="birthCountry"
            type="text"
            onChange={handleFormValueChange}
          />
          <Input
            label="Fiscal code"
            idName="fiscalCode"
            type="text"
            onChange={handleFormValueChange}
          />
        </>
      );
      break;

    case 2:
      formInputs = (
        <>
          <Input
            label="Address"
            idName="address"
            type="text"
            onChange={handleFormValueChange}
          />
          <Input
            label="City"
            idName="city"
            type="text"
            onChange={handleFormValueChange}
          />
          <Input
            label="Postcode"
            idName="postcode"
            type="text"
            onChange={handleFormValueChange}
          />
          <Input
            label="Country of residence"
            idName="residenceCountry"
            type="text"
            onChange={handleFormValueChange}
          />
          <Input
            label="Phone number"
            idName="phoneNumber"
            type="text"
            onChange={handleFormValueChange}
          />
          <Input
            label="E-mail"
            idName="email"
            type="text"
            onChange={handleFormValueChange}
          />
          <div className={styles.privacyCheckboxContainer}>
            <input
              className={styles.privacyCheckbox}
              type="checkbox"
              id="privacyCheckbox"
              name="privacyCheckbox"
              onChange={handleFormValueChange}
            />
            <label className={styles.privacyCheckboxLabel}>
              I agree to Privacy Policy.
            </label>
          </div>
        </>
      );
  }

  return <form className={styles.form}>{formInputs}</form>;
};

export default Form;
