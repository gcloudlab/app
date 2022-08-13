import { useGlobalOutsideStore } from '@/store/modules/global';

const globalStore = useGlobalOutsideStore();

export const useRegisterCount = async () => {
  await globalStore.onGetRegisterCountAction();
};
