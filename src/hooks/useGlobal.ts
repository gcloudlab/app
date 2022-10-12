import { useGlobalOutsideStore } from '@/store/modules/global';

export const globalStore = useGlobalOutsideStore();

export const useGlobal = () => {
  const useRegisterCount = async () => {
    if (globalStore) await globalStore.onGetRegisterCountAction();
  };

  const useShareStatistics = async () => {
    if (globalStore) await globalStore.onGetShareStatisticsAction();
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
