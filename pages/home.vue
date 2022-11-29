<template>
  <div>我是home主页 {{ username }}</div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      username: '',
    };
  },
  created() {
    this.username = this.$route.params.user;
  },
};
</script>

<style scoped></style>
