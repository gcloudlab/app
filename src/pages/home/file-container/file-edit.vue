<script lang="ts">
import { defineComponent, nextTick, ref, h } from 'vue';
import { NInput } from 'naive-ui';

const ShowOrEdit = defineComponent({
  props: {
    value: [String, Number],
    truncate: [Boolean],
    onUpdateValue: [Function, Array],
  },
  setup(props) {
    const isEdit = ref(false);
    const inputRef = ref<HTMLInputElement | null>(null);
    const inputValue = ref(props.value);
    // const timeOut = ref<number>();
    // const time = 200;

    function handleOnDblClick() {
      // clearTimeout(timeOut.value);
      isEdit.value = true;
      nextTick(() => {
        inputRef.value?.focus();
      });
    }
    // function handleOnClick() {
    //   clearTimeout(timeOut.value);
    //   timeOut.value = window.setTimeout(function () {
    //     console.log('单击');
    //   }, time);
    // }
    function handleChange() {
      props.onUpdateValue && props.onUpdateValue(inputValue.value);
      isEdit.value = false;
    }
    function handleBlur() {
      isEdit.value = false;
    }
    function handleEnter(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        handleChange();
      }
    }
    return () =>
      h(
        'div',
        {
          // onClick: handleOnClick,
          onDblclick: handleOnDblClick,
          class: props.truncate ? 'truncate w-16' : '',
          style: {
            userSelect: 'none!important',
          },
        },
        isEdit.value
          ? h(NInput as unknown as HTMLInputElement, {
              ref: inputRef,
              value: inputValue.value,
              size: 'small',
              placeholder: '重命名',
              style: {
                width: '100%',
                display: 'inline-block',
              },
              onUpdateValue: (v: string) => {
                inputValue.value = v;
              },
              onKeyup: handleEnter,
              onChange: handleChange,
              onBlur: handleBlur,
            })
          : props.value
      );
  },
});

export default ShowOrEdit;
</script>
