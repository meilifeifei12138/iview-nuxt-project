<template>
  <div>
    <Layout>
      <LayoutHeader />
      <Content> 我是首页 </Content>
    </Layout>
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader';
export default {
  name: 'FrontPage',
  components: {
    LayoutHeader,
  },
};
</script>

<style scoped></style>
