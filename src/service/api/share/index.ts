import axios from "@/service/axios";
import { ShareDetailResponse } from "@/models/share";

export const getAllShares = async () => {
  return await axios.get("/all/shares");
};

export const getUserShares = async () => {
  return await axios.get("/user/shares");
};

export const getShareDetailByShareIdentity = async (
  identity: string
): Promise<ShareDetailResponse> => {
  return await axios.get("/share/basic/detail");
};
