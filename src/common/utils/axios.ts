import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toQueryString } from 'src/common/constants/common.utils';
import { setAccessToken } from '../../auth/login/auth.slice';
import { setIsExpired } from '../../auth/login/login.slice';
// config
import { HOST_API } from '../../config';
import { store } from '../redux/store';
import { PATH_AUTH } from '../routes/paths';

// ----------------------------------------------------------------------
const whiteList = [
  PATH_AUTH.login,
  PATH_AUTH.register,
  PATH_AUTH.resetPassword,
  PATH_AUTH.newPassword,
  PATH_AUTH.forgotPassword,
];
const axiosInstance = axios.create({
  baseURL: HOST_API,
  paramsSerializer: (param) => toQueryString(param),
});
const axiosInstance2 = axios.create({
  baseURL: HOST_API,
});
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;
    const refreshToken = store.getState()?.authLogin.refreshToken;
    if (
      response?.status === 401 &&
      !whiteList.some((path) => window.location.pathname.includes(path))
    ) {
      axiosInstance2
        .post<any, { accessToken: string }>('/merchant/auth/refresh-token', {
          refreshToken: refreshToken,
        })
        .then((res: any) => {
          store.dispatch(setAccessToken('Bearer ' + res?.data?.accessToken));
        })
        .catch((e) => {
          store.dispatch(setIsExpired(true));
          window.location.href = PATH_AUTH.login;
        });
    }
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.request.use(async (config) => {
  const token = store.getState()?.authLogin.accessToken;
  if (token) {
    try {
      config.headers = {
        ...config.headers,
        Authorization: token,
      };
    } catch (e) {
      console.log(e);
    }
  }
  return {
    ...config,
  };
});
export default axiosInstance;
