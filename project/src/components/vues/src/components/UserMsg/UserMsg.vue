<template>
  <transition name='user-msg' appear={true} v-if="showUser">
    <div :class="['user-msg']" >
      <span :class="['hide-user', showUser?'arrow':'arrow']" @click="showUser = !showUser"></span>
      <img :src="user.img" alt="头像"/>
      <div>{{ user.name }}</div>
      <div>{{ user.birthday }}</div>
    </div>
  </transition>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  interface User {
    name: string;
    img: string;
    birthday: string;

  }

  @Component
  export default class UserMsg extends Vue {
    @Prop({
      type: Object,
      required: true,
    }) data: User;
    user: User;
    showUser: boolean = true;
    constructor(props) {
      super(props);
      this.user = this.data;
    }
  }
</script>
<style scoped lang="less">
  .arrow{
    position: absolute;
    right: 0;
    top: 0;
  }
  .user-hide{
    position: absolute;
    transform: translateX(-100%);
  }
</style>
