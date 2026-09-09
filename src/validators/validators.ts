import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const isNotEmpty = (value: string): string | undefined => {
  if (value.trim().length < 1) {
    return "The field cannot be empty.";
  }

  return undefined;
};

export const isBirthdateValid = (value: string): string | undefined => {
  const birthdateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (value.trim().length < 1) {
    return "The field cannot be empty.";
  }

  if (!birthdateRegex.test(value)) {
    return "Date must be in DD/MM/YYYY format.";
  }

  const birthdate = dayjs(value, "DD/MM/YYYY", true);

  if (!birthdate.isValid()) {
    return "Date is not valid.";
  }

  if (birthdate.isAfter(dayjs(), "day")) {
    return "Date cannot be in the future.";
  }

  return undefined;
};

export const isFiscalCodeValid = (value: string): string | undefined => {
  const fiscalCodeRegex = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;

  if (value.trim().length < 1) {
    return "The field cannot be empty.";
  }

  if (fiscalCodeRegex.test(value.toUpperCase())) {
    return undefined;
  }

  return "Fiscal code is not valid.";
};

export const isPhoneNumberValid = (value: string): string | undefined => {
  const phoneNumberRegex = /^\+?[1-9]\d{0,14}$/;

  if (value.trim().length < 1) {
    return "The field cannot be empty.";
  }

  if (phoneNumberRegex.test(value)) {
    return undefined;
  }

  return "Phone number is not valid.";
};

export const isEmailValid = (value: string): string | undefined => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value.trim().length < 1) {
    return "The field cannot be empty.";
  }

  if (emailRegex.test(value)) {
    return undefined;
  }

  return "Email is not valid.";
};

export const isAccepted = (value: boolean): string | undefined => {
  if (!value) {
    return "Please accept the Privacy Policy to continue.";
  }

  return undefined;
};
