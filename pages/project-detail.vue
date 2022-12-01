<template>
  <div>
    <LayoutHeader />
    <Layout class="layout">
      <Card class="card">
        <h1>{{ projectDate.title }}</h1>
        <span>截止日期：{{ projectDate.announcementDate }}</span>
        <br />
        <span>项目简介：</span>
        <br />
        <span
          >项目原地址:
          <a :href="projectDate.website">{{ projectDate.website }}</a>
        </span>
      </Card>
      <Card>
        <div class="split-father-box">
          <Split v-model="splitProportion">
            <template #left>
              <div class="split-pane">左边内容</div>
            </template>
            <template #trigger>
              <div class="trigger">
                <font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" class="trigger-icon" />
              </div>
            </template>
            <template #right>
              <div class="split-pane">原文内容</div>
            </template>
          </Split>
        </div>
      </Card>
    </Layout>
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader';
import TableDate from 'assets/js/HomeProjectTable/TableDate';
export default {
  name: 'ProjectDetail',
  data() {
    return {
      projectDate: {},
      splitProportion: 0.5,
    };
  },
  components: {
    LayoutHeader,
  },
  created() {
    this.projectDate = TableDate[3];
  },
};
</script>

<style scoped>
@import '~assets/css/layout.css';
.card {
  margin-bottom: 24px;
}
h1 {
  text-align: center;
}
.split-father-box {
  height: 40rem;
  border: 1px solid #dcdee2;
}
.split-pane {
  width: 100%;
  height: 40rem;
  background-color: #f5f7f9;
  padding: 1.5rem;
  overflow-y: scroll;
}
.trigger {
  width: 0.25rem;
  height: 100%;
  background: #d3d3d3;
  border-top: none;
  border-bottom: none;
  cursor: col-resize;
}
.trigger-icon {
  color: #2db7f5;
  position: absolute;
  left: 0.125rem;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
