import { useMutation, useQuery } from "react-query";
import { QUERY_KEYS } from "src/common/constants/queryKeys.constant";
import { test } from "../service";

export const useTestApi = () => {
  return useMutation(test);
};
