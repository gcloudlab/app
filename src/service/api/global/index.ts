import { CustomResponse } from '@/models';
import { ShareStatisticsData } from '@/models/global';
import axios from '@/service/axios';

export const getRegisterCount = async () => {
  return await axios.get('/register/count');
};

export const getShareStatistics = async (): Promise<CustomResponse<ShareStatisticsData>> => {
  return await axios.get('/share/statistics');
};
