import { useMutation } from "react-query";
import { dispatch } from "src/common/redux/store";
import { setAccessToken, setLogin } from "../auth.slice";
import { ILoginCallback } from "../interface";
import { getAuth } from "../service";

export const useAuthlogin = ({ onError, onSuccess }: ILoginCallback) => {
  return {
    ...useMutation(getAuth, {
      onSuccess: (data) => {
        if (!data) return;
        const accessToken = data;
        console.log("accessToken", accessToken.accessToken);
        dispatch(setAccessToken("Bearer " + accessToken.accessToken));
        dispatch(setLogin(true));
        localStorage.setItem("accessToken", String(accessToken || ""));
        onSuccess();
      },
      onError,
    }),
  };
};
