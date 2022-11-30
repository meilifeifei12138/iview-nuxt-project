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
  data() {
    return {};
  },
  created() {
    this.$store.commit('changeIsLogin', true);
  },
};
</script>

<style scoped>
.layout {
  padding: 24px 24px;
}
</style>
