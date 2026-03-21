import { CategoryStatus } from "./enums";

export const TABLE_HEADER = [
  {
    id: "id",
    label: "ID",
    align: "left",
  },

  {
    id: "image",
    label: "Hình ảnh",
    align: "left",
  },
  {
    id: "name",
    label: "Tên danh mục",
    align: "left",
  },
  {
    id: "isDefault",
    label: "Mặc định",
    align: "left",
  },
  {
    id: "status",
    label: "Trạng thái",
    align: "left",
  },
  {
    id: "option",
    label: "Tùy chọn",
    align: "left",
  },
];

export const DEFAULT_VALUE_FORM = {
  name: "",
  description: "",
  priority: 0,
  status: CategoryStatus.IN_ACTIVE,
  isDefault: false,
  imageLink: "",
};
