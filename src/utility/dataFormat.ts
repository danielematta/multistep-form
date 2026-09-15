import { type FormValuesTypes } from "../types/types";

type DataFormatParams = {
  formData: FormValuesTypes;
  setValue: React.Dispatch<React.SetStateAction<FormValuesTypes>>;
};

const capitalizeWords = (value: string): string => {
  return value
    .trim()
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
};

const fieldsToFormat = [
  "fName",
  "lName",
  "birthPlace",
  "birthCountry",
  "address",
  "city",
  "residenceCountry",
] as const satisfies readonly (keyof FormValuesTypes)[];

const dataFormat = ({ formData, setValue }: DataFormatParams) => {
  const formattedFields = fieldsToFormat.reduce((acc, key) => {
    const value = formData[key];
    acc[key] = capitalizeWords(value);
    return acc;
  }, {} as Partial<FormValuesTypes>);

  setValue((prevState) => ({
    ...prevState,
    ...formattedFields,
    fiscalCode: formData.fiscalCode.trim().toUpperCase(),
    postcode: formData.postcode.trim().toUpperCase(),
    phoneNumber: formData.phoneNumber.trim(),
  }));
};

export default dataFormat;
