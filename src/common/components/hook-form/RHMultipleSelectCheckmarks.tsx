import { Controller, useFormContext } from "react-hook-form";
// @mui
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectProps,
} from "@mui/material";

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  options: { label: string; value: any }[];
};

type Props = IProps & SelectProps;

export default function RHFMultipleSelectCheckmarks({
  name,
  label,
  options,
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
        <FormControl>
          <InputLabel id="multiple-checkbox-label">{enhancedLabel}</InputLabel>
          <Select
            labelId="multiple-checkbox-label"
            id="multiple-checkbox"
            multiple
            value={field.value || []}
            onChange={field.onChange}
            input={<OutlinedInput label={enhancedLabel} />}
            renderValue={(selected) => selected.join(", ")}
            disabled={other.disabled}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Checkbox
                  checked={(field.value ?? []).includes(option.value)}
                />
                <ListItemText primary={option.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}
