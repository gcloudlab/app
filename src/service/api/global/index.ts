import axios from '@/service/axios';

export const getRegisterCount = async () => {
  return await axios.get('/register/count');
};
