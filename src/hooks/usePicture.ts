import { getPictureService } from '@/service/api/picture';
import { ref } from 'vue';

export interface PictureResponse {
  msg: string;
  currentPage: string;
  photoNum: number;
  totalUsers: number;
  totalCall: number;
  uip: string;
  photoList: string[];
  info: string;
}
const usePicture = async (page: number) => {
  const picture = ref<PictureResponse>();
  const res = await getPictureService(page);
  if (res.status === 200) {
    picture.value = res.data;
    // return picture;
  }
  return picture.value;
}
export default usePicture;
