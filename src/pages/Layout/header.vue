<template>
  <div class="layout-header">
    <Avatar src="xx.jps" size="large" bordered objectFit="cover" :showStatus="true" />
    <Loading class="mr-0" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Avatar from '@/components/avatar/index.vue';
import Loading from '@/components/loading/index.vue';

const router = useRouter();
</script>

<style lang="scss" scoped></style>
