import {
  type FormValuesTypes,
  type FormValueErrorsStep1Types,
  type FormValueErrorsStep2Types,
} from "../types/types";
import {
  isNotEmpty,
  isLetterOnly,
  isBirthdateValid,
  isFiscalCodeValid,
  isPhoneNumberValid,
  isEmailValid,
  isAccepted,
} from "./validators";

export const step1Validator = (
  values: FormValuesTypes,
): FormValueErrorsStep1Types => {
  return {
    fName: isNotEmpty(values.fName) || isLetterOnly(values.fName),
    lName: isNotEmpty(values.lName) || isLetterOnly(values.lName),
    birthdate: isBirthdateValid(values.birthdate),
    birthPlace: isNotEmpty(values.birthPlace) || isLetterOnly(values.birthPlace),
    birthCountry: isNotEmpty(values.birthCountry) || isLetterOnly(values.birthCountry),
    fiscalCode: isFiscalCodeValid(values.fiscalCode),
  };
};

export const step2Validator = (
  values: FormValuesTypes,
): FormValueErrorsStep2Types => {
  return {
    address: isNotEmpty(values.address),
    city: isNotEmpty(values.city) || isLetterOnly(values.city),
    postcode: isNotEmpty(values.postcode),
    residenceCountry: isNotEmpty(values.residenceCountry) || isLetterOnly(values.residenceCountry),
    phoneNumber: isPhoneNumberValid(values.phoneNumber),
    email: isEmailValid(values.email),
    privacyCheckbox: isAccepted(values.privacyCheckbox),
  };
};
