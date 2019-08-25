/* eslint-disable no-console */
import axios from "axios";

axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    console.error({ message: "请求超时!" });
    return Promise.resolve(err);
  }
);
axios.interceptors.response.use(
  data => {
    if (data.status && data.status == 200 && data.data.status == "error") {
      console.error({ message: data.data.msg });
      return;
    }
    return data;
  },
  err => {
    if (err.response.status == 504 || err.response.status == 404) {
      console.error({ message: "服务器被吃了⊙﹏⊙∥" });
    } else if (err.response.status == 403) {
      console.error({ message: "权限不足,请联系管理员!" });
    } else {
      console.error({ message: "未知错误!" });
    }
    return Promise.resolve(err);
  }
);

export default axios;
