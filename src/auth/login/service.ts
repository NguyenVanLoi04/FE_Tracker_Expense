import {
  API_LOGIN,
  API_MERCHANT_POLICIES,
  API_MERCHANT_PROFILE,
  API_TEST,
} from "src/common/constants/apis";
import { BaseEntityResponse } from "src/common/constants/common.interfaces";
import axios from "src/common/utils/axios";
import { IAuth, IResInfo, IResLogin } from "./interface";
import { ILoginForm } from "./interface/interface";

export const getAuth = (data: ILoginForm) => {
  return axios.post<any, any>(API_LOGIN, data);
};
export const getLogout = () => {
  return axios.delete("merchant/auth/logout");
};

export const getMerchantInfo = (): Promise<BaseEntityResponse<IResInfo>> => {
  return axios.get(API_MERCHANT_PROFILE);
};

export const getPolicesUser = () => {
  return axios.get<unknown, BaseEntityResponse<IResInfo>>(
    API_MERCHANT_POLICIES
  );
};

export const test = () => {
  return axios.post(API_TEST, { userName: "theshy", passWord: "password" });
};
