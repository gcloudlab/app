import { CreateShareOption } from '@/models/share';
import { useShareOutsideStore } from '@/store/modules/share';

const shareStore = useShareOutsideStore();

export const useShare = () => {
  const onCreateShareRecord = (option: CreateShareOption) => {
    return shareStore.onCreateShareRecordAction(option);
  };

  const onGetShareDetailByIndentity = async (id: string) => {
    await shareStore.onGetShareDetailByIndentityAction(id);
  };

  const onGetPopularShareList = (click_num?: number) => {
    shareStore.onGetPopularShareListAction(click_num);
  };

  return {
    onCreateShareRecord,
    onGetShareDetailByIndentity,
    onGetPopularShareList,
  };
};
