<template>
  <MainLayout>
    <!-- 상단 네비게이션 바만 표시되고 나머지 콘텐츠는 비어있음 -->
    <ShareContent>

    </ShareContent>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'
import ShareContent from "@/components/share/ShareContent.vue";

export default {
  name: 'ShareView',
  components: {
    ShareContent,
    MainLayout
  }
}
</script>

<style scoped>
.share-content {
  /* 나중에 스타일링이 필요할 때 여기에 추가 */
}
</style>