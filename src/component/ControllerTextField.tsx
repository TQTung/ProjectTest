import type { TextFieldProps } from "@mui/material/TextField";
import TextField from "@mui/material/TextField";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
import type { Dictionary } from "types/common";

interface Props<T extends FieldValues> extends Omit<TextFieldProps, "name"> {
  control: Control<T>;
  name: FieldPath<T>;
  interpolation?: Dictionary;
}

const ControllerTextField = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, placeholder, disabled, interpolation, ...rest } =
    props;

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <TextField
          id={name}
          fullWidth
          error={Boolean(error)}
          helperText={error?.message}
          placeholder={disabled ? void 0 : placeholder}
          disabled={disabled}
          {...field}
          {...rest}
        />
      )}
      name={name}
      control={control}
    />
  );
};

export default ControllerTextField;
