// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { LoadingButton } from "@mui/lab";
import { IconButton, InputAdornment, Stack } from "@mui/material";
// components
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "src/common/redux/store";
import {
  FormProvider,
  RHFCheckbox,
  RHFTextField,
} from "../../../common/components/hook-form";
import Iconify from "../../../common/components/Iconify";
import { defaultValues } from "../constants";
import { useAuthlogin } from "../hook/useLogin";
import { useTestApi } from "../hook/useTestApi";
import { IFormLoginValuesProps, ILoginForm } from "../interface/interface";
import { setShowPassword, showPasswordSelector } from "../login.slice";
import { LoginSchema } from "../schema/login.schema";
import { PATH_DASHBOARD } from "src/common/routes/paths";
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const showPassword = useSelector(showPasswordSelector);
  const dispatch = useDispatch();
  const methods = useForm<ILoginForm>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;
  const { enqueueSnackbar } = useSnackbar();
  const onSuccess = () => {
    enqueueSnackbar("Đăng nhập thành công", {
      variant: "success",
      autoHideDuration: 1000,
    });
    navigate(PATH_DASHBOARD.category.list);
  };
  const onError = () => {
    enqueueSnackbar("Đăng nhập thất bại ! xin kiểm tra lại thông tin", {
      variant: "error",
    });
  };

  const { mutate: loginAdmin } = useAuthlogin({ onSuccess, onError });

  const onSubmit = async (data: ILoginForm) => {
    loginAdmin(data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="userName" label="Tài khoản" />
        <RHFTextField
          name="passWord"
          label="Mật khẩu"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => dispatch(setShowPassword(!showPassword))}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <RHFCheckbox name="remember" label="Ghi nhớ đăng nhập" />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained">
        Đăng nhập
      </LoadingButton>
    </FormProvider>
  );
}
