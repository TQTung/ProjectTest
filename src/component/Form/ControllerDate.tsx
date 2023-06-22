import type { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { TextFieldProps } from "@mui/material/TextField";
import TextField from "@mui/material/TextField";
import type {
  Control,
  FieldErrors,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { Controller } from "react-hook-form";

interface Props<T extends FieldValues> {
  errors: FieldErrors<T>;
  control: Control<T>;
  name: FieldPath<T>;
  onChangeSelect?: (date: Date | null) => void;
  DatePickerProps?: Partial<DatePickerProps<Date | null>>;
  TextFieldProps?: TextFieldProps;
}

const ControllerDate = <T extends FieldValues>(props: Props<T>) => {
  const {
    errors,
    control,
    name,
    onChangeSelect,
    DatePickerProps,
    TextFieldProps,
  } = props;

  return (
    <Controller
      render={({ field: { ref, ...others } }) => (
        <DatePicker
          slots={(props: Props<T>) => (
            <TextField
              {...props}
              {...TextFieldProps}
              fullWidth
              error={Boolean(errors[name])}
              helperText={errors[name]?.message}
              id={name}
            />
          )}
          // InputAdornmentProps={{
          //   position: "start",
          // }}
          {...others}
          onChange={(value: Date | null | any) => {
            others.onChange(value);
            if (onChangeSelect) {
              onChangeSelect(value);
            }
          }}
          {...DatePickerProps}
        />
      )}
      name={name}
      control={control}
    />
  );
};

export default ControllerDate;
