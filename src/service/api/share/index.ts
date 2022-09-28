import axios from '@/service/axios';
import { CustomResponse } from '@/models';
import {
  CreateShareOption,
  CreateShareResponse,
  SaveShareOption,
  SaveShareResponse,
  ShareDetailItem,
  ShareListResponse,
} from '@/models/share';

export const getPopularShares = async (
  click_num?: number
): Promise<CustomResponse<ShareListResponse>> => {
  return await axios.post('/popular/share/list', { click_num: click_num ?? 20 });
};

export const getUserShares = async (): Promise<CustomResponse<ShareListResponse>> => {
  return await axios.get('/user/share/list');
};

export const getShareDetailByShareIdentity = async (
  identity: string
): Promise<CustomResponse<ShareDetailItem>> => {
  return await axios.post('/share/basic/detail', { identity });
};

export const createShare = async (
  option: CreateShareOption
): Promise<CustomResponse<CreateShareResponse>> => {
  return await axios.post('/share/basic/create', option);
};

export const saveShare = async (
  option: SaveShareOption
): Promise<CustomResponse<SaveShareResponse>> => {
  return await axios.post('/share/basic/save', option);
};
