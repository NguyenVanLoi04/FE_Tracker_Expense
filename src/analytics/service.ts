import {
  API_STATISTIC_EVENT,
  API_STATISTIC_USER,
} from "src/common/constants/apis";
import axiosInstance from "src/common/utils/axios";
import {
  ILineChartDataUser,
  IOverViewDataEvent,
  IOverViewDataUser,
  IOverViewDataUserParams,
  IResLineChart,
} from "./interface";
import { BaseEntityResponse } from "src/common/constants/common.interfaces";

// User
export const getOverviewDataUser = (params: IOverViewDataUserParams) => {
  return axiosInstance.get<unknown, BaseEntityResponse<IOverViewDataUser>>(
    `${API_STATISTIC_USER}/overview`,
    { params }
  );
};

export const getLineChartDataUser = (params: IOverViewDataUserParams) => {
  return axiosInstance.get<unknown, BaseEntityResponse<IResLineChart[]>>(
    `${API_STATISTIC_USER}/line-chart`,
    { params }
  );
};

// Event

export const getOverviewDataEvent = (params: IOverViewDataUserParams) => {
  return axiosInstance.get<unknown, BaseEntityResponse<IOverViewDataEvent>>(
    `${API_STATISTIC_EVENT}/overview`,
    { params }
  );
};

export const getLineChartDataEvent = (params: IOverViewDataUserParams) => {
  return axiosInstance.get<unknown, BaseEntityResponse<IResLineChart[]>>(
    `${API_STATISTIC_EVENT}/line-chart`,
    { params }
  );
};
