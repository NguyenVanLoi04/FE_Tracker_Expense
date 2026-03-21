import { useQuery } from "react-query";
import {
  IOverViewDataEventParams,
  IOverViewDataUserParams,
} from "../interface";
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant";
import { getOverviewDataEvent, getOverviewDataUser } from "../service";

export const useGetOverviewEvent = (params: IOverViewDataEventParams) => {
  return useQuery([QUERY_KEYS.OVERVIEW_EVENT, params], () =>
    getOverviewDataEvent(params)
  );
};
