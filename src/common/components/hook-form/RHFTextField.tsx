import { useFormContext, Controller } from "react-hook-form";
// @mui
import { TextField, TextFieldProps } from "@mui/material";

// ----------------------------------------------------------------------

type IProps = {
  name: string;
};

type Props = IProps & TextFieldProps;

export default function RHFTextField({
  name,
  label,
  required,
  ...other
}: Props) {
  const { control } = useFormContext();

  // Tùy chỉnh label để thêm dấu * đỏ khi required
  const enhancedLabel = required ? (
    <span>
      {label} <span style={{ color: "red" }}>*</span>
    </span>
  ) : (
    label
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <TextField
          {...field}
          inputRef={ref}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          InputLabelProps={{
            shrink: true,
            // Ẩn dấu * mặc định của MUI
            sx: {
              "& .MuiInputLabel-asterisk": {
                display: "none",
              },
            },
          }}
          error={!!error}
          helperText={error?.message}
          sx={{ zIndex: 0 }}
          label={enhancedLabel} // Sử dụng label đã tùy chỉnh
          {...other}
          onWheel={(event) => {
            event.currentTarget.querySelector("input")?.blur();
            event.stopPropagation();
          }}
        />
      )}
    />
  );
}
