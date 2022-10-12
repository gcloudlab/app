import { getRegisterCount, getShareStatistics } from '@/service/api/global';
import { useGlobalOutsideStore } from '@/store/modules/global';
import { onError, onWarning } from '@/utils/messages';
import useTimer from './useTimer';

export const globalStore = useGlobalOutsideStore();

export const useGlobal = () => {
  const useRegisterCount = async () => {
    // if (globalStore) await globalStore.onGetRegisterCountAction();
    try {
      globalStore.fetching = true;
      const { data } = await getRegisterCount();
      if (data.msg === 'success') {
        globalStore.register_count = data.count;
        globalStore.fetching = false;
      } else {
        onWarning(data.msg);
      }
    } catch (error) {
      useTimer(() => {
        globalStore.register_count = 0;
        globalStore.fetching = false;
      }, 3);
      onError('出错了');
    }
  };

  const useShareStatistics = async () => {
    // if (globalStore) await globalStore.onGetShareStatisticsAction();
    try {
      globalStore.fetching = true;
      const { data } = await getShareStatistics();
      if (data.msg === 'success') {
        globalStore.click_num = data.click_num;
        globalStore.share_count = data.share_count;
        globalStore.fetching = false;
      } else {
        onWarning(data.msg);
      }
    } catch (error) {
      useTimer(() => {
        globalStore.click_num = 0;
        globalStore.share_count = 0;
        globalStore.fetching = false;
      }, 3);
      onError('出错了');
    }
  };

  return {
    globalStore,
    useRegisterCount,
    useShareStatistics,
  };
};
export const useNotification = (action: string, key?: string) => {
  switch (action) {
    case 'SET':
      globalStore.onSetNotificationsStatusAction(key!);
      break;
    default:
      break;
  }
};
