import axiosRequest from "@utils/axiosRequest";

// 获取三级分类数据
export const getBaseCategoryList = () => {
  return axiosRequest({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};
