import styles from "./DatePickerInput.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/it";
import dayjs from "dayjs";

type DatePickerInputProps = {
  onChange: (date: {birthdate: string}) => void;
  value: string;
  error: string | undefined;
}

const DatePickerInput = ({onChange, value, error}: DatePickerInputProps) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="it"
      localeText={{
        fieldDayPlaceholder: () => "GG",
        fieldMonthPlaceholder: () => "MM",
        fieldYearPlaceholder: () => "AAAA",
      }}
    >
      <div className={styles.inputComponent}>
        <label className={styles.inputLabel} htmlFor="birthdate">
          Date of birth
        </label>
        <DatePicker
          views={["year", "month", "day"]}
          openTo="year"
          format="DD/MM/YYYY"
          referenceDate={dayjs().startOf("year")}
          maxDate={dayjs()}
          onChange={(date) => {
            onChange({birthdate: date?.format("DD/MM/YYYY") ?? ""});
          }}
          value={value ? dayjs(value, "DD/MM/YYYY") : null}
          slotProps={{
            textField: {
              id: "birthdate",
              error: false,
              className: `${styles.input} ${error !== undefined ? styles.inputError : ""}`,
              name: "birthdate",
            },
            desktopPaper: {
              className: styles.calendar,
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DatePickerInput;
