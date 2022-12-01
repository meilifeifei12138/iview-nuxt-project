<template>
  <div>
    <LayoutHeader />
    <Layout class="layout">
      <HomeProjectTable />
    </Layout>
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader';
import HomeProjectTable from '@/components/HomeProjectTable';
export default {
  name: 'HomePage',
  components: {
    LayoutHeader,
    HomeProjectTable,
  },
  created() {
    this.$store.commit('changeIsLogin', true);
  },
};
</script>

<style scoped>
@import '~/assets/css/layout.css';
</style>
