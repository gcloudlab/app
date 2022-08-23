<template>
  <Drawer v-model:show="show" width="40%">
    <template #trigger>
      <n-button
        class="mr-1"
        tertiary
        type="primary"
        size="small"
        @click="handleEditUserInfo"
      >
        编辑
      </n-button>
    </template>
    <template #header> 修改个人资料</template>
    暂不支持
    <Vue3Lottie class="w-1/2" :animationData="RobotJson" />
  </Drawer>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs } from "vue";
import { NButton } from "naive-ui";
import Drawer from "@/components/commons/drawer/index.vue";
import { UserDetail } from "@/models/auth";
import RobotJson from "@/assets/lotties/robot.json";

const props = defineProps({
  data: {
    type: Object as PropType<UserDetail>,
    required: true,
  },
});
const show = ref(false);
const handleEditUserInfo = () => {
  show.value = true;
};

toRefs(props);
</script>

<style lang="scss" scoped></style>
