

import { axiosInstans } from "./Axios";

export const getUserRequest = () => {
  return axiosInstans.get("/articles");
};
 