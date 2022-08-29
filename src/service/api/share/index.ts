import axios from '@/service/axios';
import { CustomResponse } from '@/models';
import {
  CreateShareOption,
  CreateShareResponse,
  SaveShareOption,
  SaveShareResponse,
  ShareDetailItem,
} from '@/models/share';

export const getAllShares = async () => {
  return await axios.get('/all/shares');
}

export const getUserShares = async () => {
  return await axios.get('/user/shares');
}

export const getShareDetailByShareIdentity = async (
  identity: string
): Promise<CustomResponse<ShareDetailItem>> => {
  return await axios.get('/share/basic/detail');
}

export const createShare = async (
  option: CreateShareOption
): Promise<CustomResponse<CreateShareResponse>> => {
  return await axios.post('/share/basic/create', option);
}

export const saveShare = async (
  option: SaveShareOption
): Promise<CustomResponse<SaveShareResponse>> => {
  return await axios.post('/share/basic/save', option);
}
