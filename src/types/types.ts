export type FormValuesTypes = {
  fName: string;
  lName: string;
  birthdate: string;
  birthPlace: string;
  birthCountry: string;
  fiscalCode: string;
  address: string;
  city: string;
  postcode: string;
  residenceCountry: string;
  phoneNumber: string;
  email: string;
  privacyCheckbox: boolean;
  privacyCheckboxOptional: boolean;
};

export type HandleFormValueChangeParams =
  | React.ChangeEvent<HTMLInputElement>
  | { birthdate: string };

export type FormValueErrorsTypes = Record<
  keyof Omit<FormValuesTypes, "privacyCheckboxOptional">,
  string | undefined
>;

export type FormValueErrorsStep1Types = Pick<
  FormValueErrorsTypes,
  "fName" | "lName" | "birthdate" | "birthPlace" | "birthCountry" | "fiscalCode"
>;

export type FormValueErrorsStep2Types = Pick<
  FormValueErrorsTypes,
  | "address"
  | "city"
  | "postcode"
  | "residenceCountry"
  | "phoneNumber"
  | "email"
  | "privacyCheckbox"
>;
