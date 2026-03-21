import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { NumberFormatValues, NumericFormat } from "react-number-format";

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  label: string;
  required?: boolean;
};

type Props = IProps & Omit<TextFieldProps, "defaultValue" | "type">;

export default function RHFNumberField({
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
      render={({
        field: { onChange, value, ref, name: fieldName },
        fieldState: { error },
      }) => (
        <NumericFormat
          customInput={TextField}
          inputRef={ref}
          fullWidth
          label={enhancedLabel}
          error={!!error}
          helperText={error?.message}
          value={value ?? ""}
          onValueChange={(vals: NumberFormatValues) => {
            onChange(vals.value || "");
          }}
          name={fieldName}
          allowNegative={false}
          thousandSeparator
          //   thousandSeparator="."
          //   decimalSeparator=","
          //   decimalScale={0}
          valueIsNumericString
          {...other}
          InputLabelProps={{
            shrink: true,
            sx: {
              "& .MuiInputLabel-asterisk": {
                display: "none",
              },
            },
          }}
          onWheel={(e: React.WheelEvent<HTMLInputElement>) => {
            e.currentTarget.querySelector("input")?.blur();
            e.stopPropagation();
          }}
        />
      )}
    />
  );
}
