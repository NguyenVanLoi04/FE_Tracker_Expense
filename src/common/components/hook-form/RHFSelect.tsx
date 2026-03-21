// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { TextField, TextFieldProps } from "@mui/material";

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  children: React.ReactNode;
};

type Props = IProps & TextFieldProps;

export default function RHFSelect({
  name,
  label,
  children,
  required,
  ...other
}: Props) {
  const { control } = useFormContext();
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
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          value={field.value || ""}
          select
          fullWidth
          InputLabelProps={{
            shrink: true,
            // Ẩn dấu * mặc định của MUI
            sx: {
              "& .MuiInputLabel-asterisk": {
                display: "none",
              },
            },
          }}
          label={enhancedLabel} // Sử dụng label đã tùy chỉnh
          // required={required} // Giữ prop required để validation
          // SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          {...other}
          sx={{ zIndex: 0 }}
        >
          {children}
        </TextField>
      )}
    />
  );
}
