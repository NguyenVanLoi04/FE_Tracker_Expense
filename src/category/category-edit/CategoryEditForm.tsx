import { Button, Paper, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FormProvider,
  RHFSwitch,
  RHFTextField,
} from "src/common/components/hook-form";
import { PATH_DASHBOARD } from "src/common/routes/paths";
import { ICreateCategory } from "../common/interfaces";
import { DEFAULT_VALUE_FORM } from "../common/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { CategorySchema } from "../common/schema";

export default function CategoryEditForm() {
  const navigate = useNavigate();
  const methods = useForm<ICreateCategory>({
    defaultValues: DEFAULT_VALUE_FORM,
    resolver: yupResolver(CategorySchema),
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Stack direction={"row"} spacing={2}>
            <RHFTextField name="name" label="Tên danh mục" />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <RHFTextField name="name" label="Mô tả danh mục" />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <RHFTextField name="name" label="Thứ tự ưu tiên" />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <RHFTextField name="name" label="Link hình ảnh danh mục" />
          </Stack>
          <Stack
            direction={"row"}
            sx={{ display: "flex", justifyContent: "flex-start" }}
            spacing={2}
          >
            <RHFSwitch name="status" label="Trang thái" />
            <RHFSwitch name="status" label="Mặc định cho User" />
          </Stack>
          <Stack
            sx={{ display: "flex", justifyContent: "flex-end" }}
            direction={"row"}
            spacing={2}
          >
            <Button
              onClick={() => navigate(PATH_DASHBOARD.category.list)}
              type="button"
              variant="contained"
              sx={{ minWidth: "100px" }}
              color="inherit"
              size="large"
            >
              Hủy bỏ
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ minWidth: "120px" }}
              size="large"
            >
              Lưu lại
            </Button>
          </Stack>
        </Stack>
      </FormProvider>
    </Paper>
  );
}
