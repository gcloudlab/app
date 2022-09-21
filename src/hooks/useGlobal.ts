import { useGlobalOutsideStore } from '@/store/modules/global';

const globalStore = useGlobalOutsideStore();

export const useRegisterCount = async () => {
  await globalStore.onGetRegisterCountAction();
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
