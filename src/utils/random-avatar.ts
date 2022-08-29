import _ from 'lodash';
import { useStorage } from './use-storage';

const base_avatar_url = 'https://gcloud-1303456836.cos.ap-chengdu.myqcloud.com/gcloud/avatars/';
const randomAvatar = (): string => {
  const random = _.random(1, 30);
  const res = `${base_avatar_url}${random}.png`;
  useStorage('avatar', res);
  return res;
}

export default randomAvatar;
