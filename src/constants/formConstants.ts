import { type FormValuesTypes, type FormValueErrorsTypes } from "../types/types";

export const initialFormValues: FormValuesTypes = {
    fName: "",
    lName: "",
    birthdate: "",
    birthPlace: "",
    birthCountry: "",
    fiscalCode: "",
    address: "",
    city: "",
    postcode: "",
    residenceCountry: "",
    phoneNumber: "",
    email: "",
    privacyCheckbox: false,
    privacyCheckboxOptional: false,
}

export const initialFormValueErrors: FormValueErrorsTypes = {
    fName: undefined,
    lName: undefined,
    birthdate: undefined,
    birthPlace: undefined,
    birthCountry: undefined,
    fiscalCode: undefined,
    address: undefined,
    city: undefined,
    postcode: undefined,
    residenceCountry: undefined,
    phoneNumber: undefined,
    email: undefined,
    privacyCheckbox: undefined,
}

export const labels: Record<keyof FormValuesTypes, string> = {
    fName: "First name",
    lName: "Last name",
    birthdate: "Date of birth",
    birthPlace: "Place of birth",
    birthCountry: "Country of birth",
    fiscalCode: "Fiscal code",
    address: "Address",
    city: "City",
    postcode: "Postcode",
    residenceCountry: "Country of residence",
    phoneNumber: "Phone number",
    email: "E-mail",
    privacyCheckbox: "Privacy policy",
    privacyCheckboxOptional: "Share personal data with partners",
  };