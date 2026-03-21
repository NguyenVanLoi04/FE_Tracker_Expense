import { Button, Container, MenuItem, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from "src/common/components/hook-form";
import SearchIcon from "@mui/icons-material/Search";
export default function UserFilter() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Container>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={"row"} spacing={2}>
          <RHFTextField name="name" label="Tên người dùng" />
          <RHFSelect name="status" label="Trang thái">
            <MenuItem value="">{"\u00A0"}</MenuItem>
            <MenuItem value="active">Hien thi</MenuItem>
            <MenuItem value="inactive">Khong hien thi</MenuItem>
          </RHFSelect>

          <Button
            startIcon={<SearchIcon />}
            type="submit"
            variant="contained"
            sx={{ minWidth: "120px" }}
          >
            Tìm kiếm
          </Button>
          <Button
            type="button"
            variant="contained"
            sx={{ minWidth: "100px" }}
            color="inherit"
          >
            Hủy bỏ
          </Button>
        </Stack>
      </FormProvider>
    </Container>
  );
}
