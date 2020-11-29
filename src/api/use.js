import axiosRequest from "@utils/axiosRequest";

/* 发送登录请求函数 */
export const asyncLogin = ({ phone, password }) => {
  return axiosRequest({
    method: "POST",
    url: "/user/passport/login",
    data: {
      phone,
      password,
    },
  });
};
