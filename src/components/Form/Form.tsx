import styles from "./Form.module.css";
import { type ReactNode } from "react";
import Input from "../Input/Input";
import DatePickerInput from "../DatePicker/DatePickerInput";
import {
  type FormValuesTypes,
  type HandleFormValueChangeParams,
  type FormValueErrorsTypes,
} from "../../types/types";
import { labels } from "../../constants/formConstants";

type FormProps = {
  currentStep: number;
  formValues: FormValuesTypes;
  formValuesErrors: FormValueErrorsTypes;
  handleFormValueChange: (newData: HandleFormValueChangeParams) => void;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

const Form = ({
  currentStep,
  formValues,
  formValuesErrors,
  handleFormValueChange,
  onSubmit,
}: FormProps) => {
  let formInputs: ReactNode;

  switch (currentStep) {
    case 1:
      formInputs = (
        <>
          <Input
            label="First name"
            idName="fName"
            type="text"
            value={formValues.fName}
            error={formValuesErrors.fName}
            onChange={handleFormValueChange}
          />
          {formValuesErrors.fName !== undefined ? (
            <div className={styles.error}>{formValuesErrors.fName}</div>
          ) : (
            ""
          )}
          <Input
            label="Last name"
            idName="lName"
            type="text"
            value={formValues.lName}
            error={formValuesErrors.lName}
            onChange={handleFormValueChange}
          />
          {formValuesErrors.lName !== undefined ? (
            <div className={styles.error}>{formValuesErrors.lName}</div>
          ) : (
            ""
          )}
          <DatePickerInput
            onChange={handleFormValueChange}
            value={formValues.birthdate}
            error={formValuesErrors.birthdate}
          />
          {formValuesErrors.birthdate !== undefined ? (
            <div className={styles.error}>{formValuesErrors.birthdate}</div>
          ) : (
            ""
          )}
          <Input
            label="Place of birth"
            idName="birthPlace"
            type="text"
            value={formValues.birthPlace}
            error={formValuesErrors.birthPlace}
            onChange={handleFormValueChange}
          />
          {formValuesErrors.birthPlace !== undefined ? (
            <div className={styles.error}>{formValuesErrors.birthPlace}</div>
          ) : (
            ""
          )}
          <Input
            label="Country of birth"
            idName="birthCountry"
            type="text"
            value={formValues.birthCountry}
            error={formValuesErrors.birthCountry}
            onChange={handleFormValueChange}
          />
          {formValuesErrors.birthCountry !== undefined ? (
            <div className={styles.error}>{formValuesErrors.birthCountry}</div>
          ) : (
            ""
          )}
          <Input
            label="Fiscal code"
            idName="fiscalCode"
            type="text"
            value={formValues.fiscalCode}
            error={formValuesErrors.fiscalCode}
            onChange={handleFormValueChange}
          />
          {formValuesErrors.fiscalCode !== undefined ? (
            <div className={styles.error}>{formValuesErrors.fiscalCode}</div>
          ) : (
            ""
          )}
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
            value={formValues.address}
            error={formValuesErrors.address}
            onChange={handleFormValueChange}
          />
          {formValuesErrors.address !== undefined ? (
            <div className={styles.error}>{formValuesErrors.address}</div>
          ) : (
            ""
          )}
          <Input
            label="City"
            idName="city"
            type="text"
            value={formValues.city}
            error={formValuesErrors.city}
            onChange={handleFormValueChange}
          />
          {formValuesErrors.city !== undefined ? (
            <div className={styles.error}>{formValuesErrors.city}</div>
          ) : (
            ""
          )}
          <Input
            label="Postcode"
            idName="postcode"
            type="text"
            value={formValues.postcode}
            error={formValuesErrors.postcode}
            onChange={handleFormValueChange}
          />
          {formValuesErrors.postcode !== undefined ? (
            <div className={styles.error}>{formValuesErrors.postcode}</div>
          ) : (
            ""
          )}
          <Input
            label="Country of residence"
            idName="residenceCountry"
            type="text"
            value={formValues.residenceCountry}
            error={formValuesErrors.residenceCountry}
            onChange={handleFormValueChange}
          />
          {formValuesErrors.residenceCountry !== undefined ? (
            <div className={styles.error}>
              {formValuesErrors.residenceCountry}
            </div>
          ) : (
            ""
          )}
          <Input
            label="Phone number"
            idName="phoneNumber"
            type="text"
            value={formValues.phoneNumber}
            error={formValuesErrors.phoneNumber}
            onChange={handleFormValueChange}
          />
          {formValuesErrors.phoneNumber !== undefined ? (
            <div className={styles.error}>{formValuesErrors.phoneNumber}</div>
          ) : (
            ""
          )}
          <Input
            label="E-mail"
            idName="email"
            type="text"
            value={formValues.email}
            error={formValuesErrors.email}
            onChange={handleFormValueChange}
          />
          {formValuesErrors.email !== undefined ? (
            <div className={styles.error}>{formValuesErrors.email}</div>
          ) : (
            ""
          )}
          <div className={styles.privacyCheckboxContainer}>
            <input
              className={`${styles.privacyCheckbox} ${formValuesErrors.privacyCheckbox !== undefined ? styles.privacyCheckboxError : ""}`}
              type="checkbox"
              id="privacyCheckbox"
              name="privacyCheckbox"
              checked={formValues.privacyCheckbox}
              onChange={handleFormValueChange}
            />
            <label className={styles.privacyCheckboxLabel}>
              I have read and agree to the Privacy Policy.
            </label>
          </div>
          {formValuesErrors.privacyCheckbox !== undefined ? (
            <div className={styles.error}>
              {formValuesErrors.privacyCheckbox}
            </div>
          ) : (
            ""
          )}
          <div className={styles.privacyCheckboxOptionalContainer}>
            <input
              className={styles.privacyCheckbox}
              type="checkbox"
              id="privacyCheckboxOptional"
              name="privacyCheckboxOptional"
              checked={formValues.privacyCheckboxOptional}
              onChange={handleFormValueChange}
            />
            <label className={styles.privacyCheckboxLabel}>
              I consent to the sharing of my personal data with selected
              partners for promotional purposes. (Optional)
            </label>
          </div>
        </>
      );
      break;
    case 3:
      formInputs = (
        <>
          {Object.entries(formValues).map(([name, value]) => (
            <div className={styles.dataContainer} key={name}>
              <div className={styles.dataLabel}>
                {labels[name as keyof FormValuesTypes]}:&nbsp;
              </div>
              {name === "privacyCheckbox" || name === "privacyCheckboxOptional"
                ? value
                  ? "accepted"
                  : "refused"
                : value}
            </div>
          ))}
        </>
      );
      break;
    default:
      formInputs = null;
  }

  return (
    <>
      <form className={styles.form} id="form" onSubmit={onSubmit}>
        {formInputs}
      </form>
    </>
  );
};

export default Form;
