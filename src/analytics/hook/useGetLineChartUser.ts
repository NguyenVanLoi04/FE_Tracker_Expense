import { useQuery } from "react-query";
import { IOverViewDataUserParams } from "../interface";
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant";
import { getLineChartDataUser, getOverviewDataUser } from "../service";

export const useGetLineChartUser = (params: IOverViewDataUserParams) => {
  return useQuery([QUERY_KEYS.LINECHART_USER, params], () =>
    getLineChartDataUser(params)
  );
};
