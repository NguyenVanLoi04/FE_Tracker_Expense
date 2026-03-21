import { stat } from "fs";

// ----------------------------------------------------------------------
function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT_AUTH = "/auth";
export const ROOT_DASHBOARD = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOT_AUTH,
  login: path(ROOT_AUTH, "/login"),
  register: path(ROOT_AUTH, "/register"),
  loginUnprotected: path(ROOT_AUTH, "/login-unprotected"),
  registerUnprotected: path(ROOT_AUTH, "/register-unprotected"),
  verify: path(ROOT_AUTH, "/verify"),
  resetPassword: path(ROOT_AUTH, "/reset-password"),
  newPassword: path(ROOT_AUTH, "/new-password"),
  forgotPassword: path(ROOT_AUTH, "/forgot-password"),
  emailConfirmation: path(ROOT_AUTH, "/email-confirmation"),
  approvedNotification: path(ROOT_AUTH, "/pending-approval"),
};

export const PATH_PAGE = {
  page403: "/403",
  page404: "/404",
  page500: "/500",
};

export const PATH_DASHBOARD = {
  root: "/",
  general: {
    app: path(ROOT_DASHBOARD, "/app"),
  },
  event: {
    root: path(ROOT_DASHBOARD, "/event"),
    list: path(ROOT_DASHBOARD, "/event/list"),
    edit: path(ROOT_DASHBOARD, "/event/edit/:id"),
    editEvent: path(ROOT_DASHBOARD, "/event/edit/:id"),
    create: path(ROOT_DASHBOARD, "/event/create"),
  },
  merchant: {
    root: path(ROOT_DASHBOARD, "/merchant"),
    settings: path(ROOT_DASHBOARD, "/merchant/settings"),
    change_password: path(ROOT_DASHBOARD, "/merchant/change-password"),
  },
  agentManage: {
    root: path(ROOT_DASHBOARD, "/agent"),
    list: path(ROOT_DASHBOARD, "/agent/list"),
    new: path(ROOT_DASHBOARD, "/agent/new"),
    edit: path(ROOT_DASHBOARD, "/agent/edit/:id"),
    detail: path(ROOT_DASHBOARD, "/agent/detail/:id"),
  },

  statistic: {
    root: path(ROOT_DASHBOARD, "/statistic"),
    user: path(ROOT_DASHBOARD, "/statistic/user"),
    category: path(ROOT_DASHBOARD, "/statistic/category"),
  },
  userManagement: {
    root: path(ROOT_DASHBOARD, "/user-management"),
    list: path(ROOT_DASHBOARD, "/user-management/list"),
    new: path(ROOT_DASHBOARD, "/user-management/new"),
    edit: path(ROOT_DASHBOARD, "/user-management/edit/:id"),
    detail: path(ROOT_DASHBOARD, "/user-management/detail/:id"),
  },

  category: {
    root: path(ROOT_DASHBOARD, "/category"),
    list: path(ROOT_DASHBOARD, "/category/list"),
    new: path(ROOT_DASHBOARD, "/category/new"),
    edit: path(ROOT_DASHBOARD, "/category/edit/:id"),
    detail: path(ROOT_DASHBOARD, "/category/detail/:id"),
  },
};
