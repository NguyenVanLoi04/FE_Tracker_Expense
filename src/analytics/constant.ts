import dayjs from "dayjs";
import {
  SEARCH_STATUS_RECEIVE_GIFT,
  SEARCH_USER_DATE_TYPE,
  STATISTIC_STATUS_LOGIN,
} from "./enum";

export const TEST = {};

export const DEFAULT_VALUE_SEARCH_STATISTIC_USER = {
  dateType: SEARCH_USER_DATE_TYPE.CREATE_AT,
  statusLoggedIn: "",
  startDate: dayjs().startOf("month").format("YYYY-MM-DDTHH:mm:ss"),
  endDate: dayjs().endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
};

export const DEFAULT_VALUE_SEARCH_STATISTIC_EVENT = {
  eventId: "",
  startDate: dayjs().startOf("month").format("YYYY-MM-DDTHH:mm:ss"),
  endDate: dayjs().endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
};

export const statusFilter = [
  { value: "", label: "Tất cả" },
  { value: STATISTIC_STATUS_LOGIN.LOGGED_IN, label: "Đã đăng nhập" },
  { value: STATISTIC_STATUS_LOGIN.NOT_LOGGED_IN, label: "Chưa đăng nhập" },
];

export const statusTypeFilter = [
  { value: "", label: "Tất cả" },
  { value: SEARCH_USER_DATE_TYPE.CREATE_AT, label: "Ngày đăng kí" },
  { value: SEARCH_USER_DATE_TYPE.LAST_VISIT_DATE, label: "Đăng nhập gần nhất" },
];

export const convertVietnamese = {
  CHECKED_IN: "Đã tham gia",
  SUCCESS: "Đã nhận quà",
  PENDING: "Chưa nhận quà",
} as const;
