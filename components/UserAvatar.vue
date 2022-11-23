<template>
  <Dropdown>
    <Badge>
      <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
    </Badge>
    <Icon :size="18" type="md-arrow-dropdown" />
    <template #list>
      <DropdownMenu>
        <DropdownItem name="message">
          <Button type="text" @click="toMessageCenter">
            消息中心
            <Badge :count="messageUnreadCount" />
          </Button>
        </DropdownItem>
        <DropdownItem name="logout">
          <Button type="text" @click="loginOut">退出登录</Button>
        </DropdownItem>
      </DropdownMenu>
    </template>
  </Dropdown>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    messageUnreadCount: {
      type: Number,
      default: 8,
    },
  },
  methods: {
    loginOut() {
      //退出登陆 成功
    },
    toMessageCenter() {},
  },
};
</script>

<style scoped></style>
