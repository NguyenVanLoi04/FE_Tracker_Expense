import { TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import get from "lodash/get";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FORMAT_DATE_TIME_INPUT } from "src/common/constants/common.constants";

type RHFDatePickerProps = {
  name: string;
  label: React.ReactNode;
  inputFormat?: string;
  disabled?: boolean;
  required?: boolean;
  size?: "small" | "medium";
  minDate?: Date | null;
  maxDate?: Date | null;
};

export const RHFDatePicker = ({
  name,
  label,
  inputFormat = FORMAT_DATE_TIME_INPUT,
  disabled = false,
  required = false,
  size = "medium",
  minDate,
  maxDate,
}: RHFDatePickerProps) => {
  const { control, formState } = useFormContext();
  const error = get(formState.errors, name);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DateTimePicker
          {...field}
          value={field.value === undefined ? null : field.value}
          label={
            <span>
              {label} {required && <span style={{ color: "red" }}>*</span>}
            </span>
          }
          inputFormat={inputFormat}
          disabled={disabled}
          minDate={minDate}
          maxDate={maxDate}
          renderInput={(params) => (
            <TextField
              {...params}
              size={size}
              fullWidth
              error={!!error}
              helperText={
                typeof error === "object" && error?.message
                  ? String(error.message)
                  : undefined
              }
              disabled={disabled}
              InputLabelProps={{
                shrink: true,
                sx: {
                  "& .MuiInputLabel-asterisk": {
                    display: "none",
                  },
                },
              }}
            />
          )}
        />
      )}
    />
  );
};
