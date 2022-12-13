<template>
  <div>
    <HeadNavBar />
    <Layout class="layout">
      <HomeProjectTable />
    </Layout>
  </div>
</template>

<script>
import HeadNavBar from '@/components/HeadNavBar';
import HomeProjectTable from '@/components/HomeProjectTable';
export default {
  name: 'HomePage',
  components: {
    HeadNavBar,
    HomeProjectTable,
  },
  middleware: ['auth'],
};
</script>

<style scoped>
@import '~/assets/css/layout.css';
</style>
