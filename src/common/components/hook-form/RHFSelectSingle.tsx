// RHFSelect.tsx
import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type IProps = {
  name: string;
  children: React.ReactNode;
};

type Props = IProps & TextFieldProps;

export default function RHFSelectSingle({ name, children, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          // SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  );
}
