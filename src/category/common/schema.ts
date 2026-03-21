import * as Yup from "yup";

export const CategorySchema = Yup.object().shape({
  name: Yup.string().required("Vui lòng nhập tên danh mục"),
});
