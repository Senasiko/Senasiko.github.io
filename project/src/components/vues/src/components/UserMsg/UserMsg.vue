<template>
  <transition name='user-msg' appear={true} v-if="showUser">
    <div :class="['user-msg']" >
      <span :class="['hide-user', showUser?'arrow':'arrow']" @click="showUser = !showUser"></span>
      <img :src="user.img" alt="头像"/>
      <div v-for="msg in user.msgs" :class="['msg-item', msg.link && 'link']">
        <i v-if="msg.icon" :class="msg.icon"></i>
        <span v-if="!msg.link && msg.value" >{{ msg.value }}</span>
        <a v-if="msg.link && msg.value" :href="msg.link" target="_blank">{{ msg.value }}</a>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  interface MsgType {
    icon: string;
    value: string;
    link?: string;
  }

  interface User {
    img: string;
    msgs: MsgType[];
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
