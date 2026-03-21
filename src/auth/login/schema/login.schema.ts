import * as Yup from "yup";
export const LoginSchema = Yup.object().shape({
  userName: Yup.string().required("Vui lòng nhập tài khoản"),
  passWord: Yup.string().required("Vui lòng nhập mật khẩu"),
});
