import { Lang, LangObj } from "./common.interfaces";

export const LANG: Record<Lang, Lang> = {
  en: "en",
  vi: "vi",
};

export const langs: Record<Lang, LangObj> = {
  en: {
    label: "English",
    value: "en",
    icon: "/assets/icons/flags/ic_flag_en.svg",
  },
  vi: {
    label: "Vietnamese",
    value: "vi",
    icon: "/assets/icons/flags/ic_flag_vn.svg",
  },
};
export const DATE_FORMAT = "dd.MM.yyyy";

export enum BooleanEnum {
  TRUE = 1,
  FALSE = -1,
}

export const FIELD = {
  WOOD: "wood",
};

export const BREADCUMBS = {
  DASHBOARD: "Dashboard",
  CATEGORY_MANAGEMENT: "Quản lý danh mục",
  CATEGORY_LIST: "Danh sách danh mục",
  CATEGORY_CREATE: "Tạo danh mục",
  CATEGORY_EDIT: "Chỉnh sửa danh mục",
  CATEGORY_DETAIL: "Chi tiết danh mục",

  AGENT_MANAGEMENT: "Quản lý admin",
  AGENT_LIST: "Danh sách admin",
  AGENT_CREATE: "Tạo admin",
  AGENT_EDIT: "Chình sửa admin",
  AGENT_DETAIL: "Chi tiết admin",

  USER_MANAGEMENT: "Quản lý người dùng",
  USER_LIST: "Danh sách người dùng",
  USER_CREATE: "Tạo người dùng",
  USER_EDIT: "Chình sửa người dùng",
  USER_DETAIL: "Chi tiết người dùng",

  STATISTICAL_MANAGEMENT: "Thống kê",
  STATISTICAL_USER: "Thống kê người dùng",
  STATISTICAL_CATEGORY: "Thống kê danh mục",
};
export const FORMAT_DATE_FILTER = "MM-DD-YYYY HH:mm:ss";
export const FORMAT_DATE_TIME_INPUT = "dd-MM-yyyy HH:mm";
export const FORMAT_DATE_NEWS = "dd-MM-yyyy HH:mm:ss";
export const DEFAULT_MAIN_COLOR = "#FFEAEA";

export const FORBIDDE_MESSAGE = "Bạn không có quyền thực hiện hành động này!";
