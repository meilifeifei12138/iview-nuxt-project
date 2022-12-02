<template>
  <div>
    <Layout>
      <HeadNavBar />
      <Content> 我是首页 </Content>
    </Layout>
  </div>
</template>

<script>
import HeadNavBar from '@/components/HeadNavBar';
export default {
  name: 'FrontPage',
  components: {
    HeadNavBar,
  },
};
</script>

<style scoped></style>
