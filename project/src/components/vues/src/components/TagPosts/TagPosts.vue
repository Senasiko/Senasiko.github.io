<template>
  <div>
    <div>
      <input type="text" class="ant-input" placeholder="输入标签名" v-model="tagKeyword">
    </div>
    <div class="tags" ref="tagList">
      {{ this.tagPosts }}
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop, Watch } from 'vue-property-decorator';

  @Component
  export default class TagPosts extends Vue {
    @Prop({
      type: Object,
      required: true,
    })data;
    tagKeyword: string = '';
    tagPosts: object = this.data;
    get tagList() {
      return Object.keys(this.tagPosts).filter(tag => !this.tagKeyword || tag.match(this.tagKeyword));
    }
    get tagPostsArray() {
      return Object
    }
    @Watch('tagList')
    onTagListChanged() {
      this.initTagList();
    }
    initTagList() {
      reactCom.tagList(this.$refs.tagList, this.tagList);
    }
    mounted() {
      this.initTagList();
    }
  }
</script>

<style scoped lang="less">

</style>
