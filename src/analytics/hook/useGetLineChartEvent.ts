import { useQuery } from "react-query";
import {
  IOverViewDataEventParams,
  IOverViewDataUserParams,
} from "../interface";
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant";
import { getLineChartDataEvent } from "../service";

export const useGetLineChartEvent = (params: IOverViewDataEventParams) => {
  return useQuery([QUERY_KEYS.LINECHART_EVENT, params], () =>
    getLineChartDataEvent(params)
  );
};
