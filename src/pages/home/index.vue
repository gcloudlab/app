<template>
  <div class="home flex">
    <div class="file-tree-bar w-48 md:w-60 animate__animated animate__fadeIn faster">
      <FileMenu @selectedKeys="handleSelectedKeys" @expandedKeys="handleExpandedKeys" />
      <Overview />
      <OnlineUsers />
    </div>
    <div class="main-container shadow-inner w-screen p-4 z-10">
      <FileList :values="expendMenuValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TreeOption } from 'naive-ui';
import FileMenu from './file-menu.vue';
import Overview from './overview.vue';
import OnlineUsers from './community-status.vue';
import FileList from './file-list.vue';
import { ref } from 'vue';

const expendMenuValue = ref<TreeOption>();

const handleSelectedKeys = (value: TreeOption) => {
  // console.log('---selected key', value);
};
const handleExpandedKeys = (value: TreeOption) => {
  // console.log('---expand key', value);
  expendMenuValue.value = value;
};
</script>

<style lang="scss" scoped>
.file-tree-bar,
.main-container {
  min-height: calc(100vh - 57px);
}
.file-tree-bar {
}
.main-container {
  background: rgb(255, 255, 255);
}
</style>
