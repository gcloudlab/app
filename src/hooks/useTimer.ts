import { ref, watch } from 'vue';

const useTimer = (cb: Function, end: number) => {
  const count = ref<number>(end);
  const timer = ref<number>();

  timer.value = setInterval(() => {
    count.value--;
  }, 1000);

  watch(count, () => {
    if (count.value === 0) {
      clearInterval(timer.value);
      cb();
    }
  });
  return [count];
}

export default useTimer;
