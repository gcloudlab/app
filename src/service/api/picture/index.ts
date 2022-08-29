import axios from '@/service/axios';

export const getPictureService = async (page: number) => {
  return await axios.get(`https://v2.aoau.top/pb?p=${page}`);
}
