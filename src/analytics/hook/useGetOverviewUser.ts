import { useQuery } from "react-query";
import { IOverViewDataUserParams } from "../interface";
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant";
import { getOverviewDataUser } from "../service";

export const useGetOverviewUser = (params: IOverViewDataUserParams) => {
  return useQuery([QUERY_KEYS.OVERVIEW_USER, params], () =>
    getOverviewDataUser(params)
  );
};
