import { Button, Paper, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FormProvider,
  RHFSwitch,
  RHFTextField,
} from "src/common/components/hook-form";
import { PATH_DASHBOARD } from "src/common/routes/paths";

export default function UserDetailForm() {
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Stack direction={"row"} spacing={2}>
            <RHFTextField name="name" label="ID" />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <RHFTextField name="name" label="Tên người dùng" />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <RHFTextField name="name" label="Username" />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <RHFTextField name="name" label="Số lượng danh mục đã tạo" />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <RHFTextField name="name" label="Số lượng giao dịch đã tạo" />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <RHFTextField name="name" label="Ngày tạo" />
          </Stack>
          <Stack
            direction={"row"}
            sx={{ display: "flex", justifyContent: "flex-start" }}
            spacing={2}
          >
            <RHFSwitch name="status" label="Trang thái" />
          </Stack>
          <Stack
            sx={{ display: "flex", justifyContent: "flex-end" }}
            direction={"row"}
            spacing={2}
          >
            <Button
              onClick={() => navigate(PATH_DASHBOARD.userManagement.list)}
              type="button"
              variant="contained"
              sx={{ minWidth: "100px" }}
              color="inherit"
              size="large"
            >
              Hủy bỏ
            </Button>
          </Stack>
        </Stack>
      </FormProvider>
    </Paper>
  );
}
