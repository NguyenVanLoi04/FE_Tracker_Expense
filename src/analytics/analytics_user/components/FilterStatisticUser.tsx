import { LoadingButton } from "@mui/lab";
import {
  Button,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from "src/common/components/hook-form";
import Iconify from "src/common/components/Iconify";

import {
  DEFAULT_VALUE_SEARCH_STATISTIC_USER,
  statusFilter,
  statusTypeFilter,
} from "src/analytics/constant";

interface Props {
  handleSearch: Function;
}
export default function FilterStatisticUser(props: Props) {
  const { handleSearch } = props;
  const { t } = useTranslation();
  const methods = useForm({
    defaultValues: DEFAULT_VALUE_SEARCH_STATISTIC_USER,
  });
  const {
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data: any) => {
    const dataFilter = {
      dateType: data?.dateType,
      statusLoggedIn: data?.statusLoggedIn,
      startDate: data?.startDate,
      endDate: data?.endDate,
    };
    handleSearch(dataFilter);
  };

  const handleClickClear = () => {
    reset(DEFAULT_VALUE_SEARCH_STATISTIC_USER);
    handleSearch(DEFAULT_VALUE_SEARCH_STATISTIC_USER);
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" justifyContent="center" spacing={2}>
          <RHFSelect
            size="small"
            name="statusLoggedIn"
            label="Trạng thái đăng nhập"
            SelectProps={{ displayEmpty: true }}
            sx={{ maxWidth: "300px" }}
          >
            {statusFilter.map((item, index) => (
              <MenuItem key={index} value={String(item.value)}>
                {item.label}
              </MenuItem>
            ))}
          </RHFSelect>

          <RHFSelect
            size="small"
            name="dateType"
            label="Cách thức tìm kiếm"
            SelectProps={{ displayEmpty: true }}
            sx={{ maxWidth: "300px" }}
          >
            {statusTypeFilter.map((item, index) => (
              <MenuItem key={index} value={String(item.value)}>
                {item.label}
              </MenuItem>
            ))}
          </RHFSelect>

          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <Stack position="relative" width="100%">
                <DateTimePicker
                  {...field}
                  label={t("Request_startDate")}
                  inputFormat="dd/MM/yyyy HH:mm:ss"
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      {...params}
                      fullWidth
                      helperText={errors.startDate && errors.startDate?.message}
                      error={!!errors.startDate}
                      type="number"
                    />
                  )}
                />
              </Stack>
            )}
          />

          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <Stack position="relative" width="100%">
                <DateTimePicker
                  {...field}
                  minDateTime={watch("startDate")}
                  label={t("Request_endDate")}
                  inputFormat="dd/MM/yyyy HH:mm:ss"
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      {...params}
                      fullWidth
                      helperText={errors.endDate && errors.endDate?.message}
                      error={!!errors.endDate}
                      type="number"
                    />
                  )}
                />
              </Stack>
            )}
          />
          <Stack
            direction={"row"}
            spacing={2}
            alignSelf={"center"}
            width={"100%"}
          >
            <LoadingButton
              size="small"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{ minWidth: "50%!important" }}
              startIcon={<Iconify icon="material-symbols:filter-alt" />}
            >
              {t("filter")}
            </LoadingButton>
            <Button
              size="small"
              color="inherit"
              sx={{ minWidth: "46%!important" }}
              variant="contained"
              onClick={handleClickClear}
              startIcon={<Iconify icon="ph:x-bold" />}
            >
              {t("clear")}
            </Button>
          </Stack>
        </Stack>
      </FormProvider>
    </>
  );
}
