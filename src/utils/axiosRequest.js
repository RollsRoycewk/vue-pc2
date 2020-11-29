import axios from "axios";
// 引入进度条插件
import NProgress from "nprogress";
// 引入样式
import "nprogress/nprogress.css";
// 引入elementUi消息提示
import { Message } from "element-ui";

// create方法设置一些公共的或者默认的参数,将来发请求就会统一携带上
const instance = axios.create({
  // baseURL: "http://182.92.128.115/api", //公共基础路径
  baseURL: "/api", //公共基础路径
  headers: {}, //公共请求头
});

/* 设置请求拦截器,请求拦截器:在发送请求之前触发,一般只设置成功 */
instance.interceptors.request.use(
  (config) => {
    // 开始进度条
    NProgress.start();
    return config;
    // config 请求的配置对象 将来发送请求（请求地址，请求参数，请求方式等）都会在config中找
  }
  // 初始化Promise.resolve()返回默认成功的Promise，只会触发成功的回调
  //()=>{}
);

/* 设置响应拦截器 */
instance.interceptors.response.use(
  // 响应成功：当响应状态码为 2xx
  (response) => {
    // 结束进度条
    NProgress.done();
    // 响应成功不能代表功能成功，只是代表有响应结果,功能成功是否成功看 code是否200
    if (response.data.code === 200) {
      return response.data.data;
    }

    const { message } = response.data;
    // 错误提示
    Message.error(message);
    // 功能失败,返回失败的Promise
    return Promise.reject(message);
  },
  // 响应失败：当响应状态码不是 2xx
  (err) => {
    // 结束进度条
    NProgress.done();
    const message = err.message || "网络错误";
    // 错误提示
    Message.error(message);
    return Promise.reject(message);
  }
);

export default instance;
