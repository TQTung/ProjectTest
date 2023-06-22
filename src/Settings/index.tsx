import Paper from "@mui/material/Paper";
import CommonWrap from "../component/CommonWrap";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormLabel from "component/Form/FormLabel";
import ControllerTextField from "component/ControllerTextField";
// import ControllerDate from "component/Form/ControllerDate";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DatePicker } from "@mui/x-date-pickers";

const validationSchema = yup.object().shape({
  backgroundColor: yup
    .string()
    .trim("")
    .strict(true)
    .required("required")
    .default(""),
  title: yup.string().trim("").strict(true).required("required").default(""),
  email: yup
    .string()
    .trim("")
    .strict(true)
    .required("required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9`^<>{}/\\|;:.,~!?#$%=&()[\]_+*"-]+\.[A-Z]{2,10}$/i,
      "email invalid"
    )
    .default(""),
  date: yup.date().required("required").nullable().typeError("invalid Date"),
});
interface FormData {
  title: string;
  email: string;
  backgroundColor: string;
  date: Date | null;
}

const Settings = () => {
  const { handleSubmit, control } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: validationSchema.getDefault(),
  });

  const onSubmit = (value: FormData) => {
    console.log(value);
  };
  return (
    <CommonWrap title="Settings">
      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          rowGap: 1,
          p: 2,
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={4} md={2}>
            <FormLabel required title="Title" name="title" />
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <ControllerTextField name="title" control={control} />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <FormLabel required title="Email" name="email" />
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <ControllerTextField name="email" control={control} />
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={4} md={2}>
            <FormLabel
              required
              title="Background Color"
              name="backgroundColor"
            />
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <ControllerTextField name="backgroundColor" control={control} />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <FormLabel required title="Date" name="date" />
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            {/* <ControllerDate control={control} name="date" errors={errors} /> */}
            <DatePicker />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Button sx={{ mt: 3 }} type="submit" variant="outlined">
            Submit
          </Button>
        </Grid>
      </Paper>
    </CommonWrap>
  );
};

export default Settings;
