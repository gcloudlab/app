import { defineComponent, nextTick, ref, h } from 'vue';
import { NInput } from 'naive-ui';

const ShowOrEdit = defineComponent({
  props: {
    value: [String, Number],
    onUpdateValue: [Function, Array],
  },
  setup(props) {
    const isEdit = ref(false);
    const inputRef = ref<HTMLInputElement | null>(null);
    const inputValue = ref(props.value);
    const time = 200;
    const timeOut = ref<number>();

    function handleOnDblClick() {
      clearTimeout(timeOut.value);
      isEdit.value = true;
      nextTick(() => {
        inputRef.value?.focus();
      });
    }
    function handleOnClick() {
      clearTimeout(timeOut.value);
      timeOut.value = window.setTimeout(function () {
        console.log('单击');
      }, time);
    }
    function handleChange() {
      props.onUpdateValue && props.onUpdateValue(inputValue.value);
      isEdit.value = false;
    }
    return () =>
      h(
        'div',
        {
          onClick: handleOnClick,
          onDblclick: handleOnDblClick,
          style: {
            userSelect: 'none',
          },
        },
        isEdit.value
          ? h(NInput as unknown as HTMLInputElement, {
              ref: inputRef,
              value: inputValue.value,
              placeholder: '重命名',
              onUpdateValue: (v: any) => {
                inputValue.value = v;
              },
              onChange: handleChange,
              onBlur: handleChange,
            })
          : props.value
      );
  },
});

export default ShowOrEdit;
