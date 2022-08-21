<template>
  <div>
    <n-button quaternary type="primary" size="small" @click="activate"
      >更新日志</n-button
    >
    <n-drawer
      v-model:show="active"
      :width="200"
      :height="300"
      :trap-focus="false"
      :block-scroll="false"
      placement="bottom"
      to="#user-info"
    >
      <n-drawer-content>
        <n-scrollbar style="max-height: 300px">
          <n-timeline>
            <n-timeline-item
              v-for="item in data"
              :type="item.type"
              :title="item.title"
              :content="item.content"
              :time="item.time"
            />
          </n-timeline>
        </n-scrollbar>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup lang="ts">
import {
  NTimeline,
  NTimelineItem,
  NScrollbar,
  TimelineItemProps,
  NDrawer,
  NDrawerContent,
  NButton,
} from "naive-ui";
import { ref } from "vue";

const active = ref(false);
const activate = () => {
  active.value = true;
};
const data: TimelineItemProps[] = [
  {
    type: "success",
    title: "功能",
    content: "新增Not Found页面",
    time: "2022-08-21",
  },
  {
    type: "info",
    title: "日常",
    content: "新增日志查看; 新增视频播放功能; 修复图片预览畸变；其他",
    time: "2022-08-20",
  },
];
</script>

<style lang="scss" scoped></style>
