<template>
  <Modal v-model="showModal" title="订阅" @on-ok="toSubscription" ok-text="去订阅" cancel-text="再考虑考虑">
    <slot name="content">
      <h1>打钱打钱</h1>
    </slot>
  </Modal>
</template>

<script>
export default {
  name: 'SubscriptionModalComponent',
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toSubscription() {
      this.$router.push({ path: '/subscription' });
    },
  },
};
</script>

<style scoped></style>
