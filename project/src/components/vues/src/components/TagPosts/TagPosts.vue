<template>
  <div class="tag-posts">
    <div class="input-div">
      <input type="text" class="ant-input" placeholder="输入标签名" v-model="tagKeyword">
    </div>
    <div class="tags" ref="tagList">
    </div>
    <transition-group tag="div" class="post-list" name="post-list" :appear="true">
      <div v-for="tagPost in tagPostsArray" class="panel post-item" :key="tagPost.tagName" :id="tagPost.tagName">
        <h1 class="post-item-title" style="cursor: auto">{{ tagPost.tagName }}</h1>
        <ul>
          <li v-for="post in tagPost.posts" :key="post" @click="goPost(post.url)" style="cursor: pointer">
            {{ post.title }}
          </li>
        </ul>
      </div>
    </transition-group>
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
      return Object.keys(this.tagPosts).filter(
        tag => !this.tagKeyword || tag.match(this.tagKeyword)
      ).sort(
        (a, b) => this.tagPosts[b].length - this.tagPosts[a].length
      );
    }
    get tagPostsArray() {
      return this.tagList.map((tagName, index) => ({ tagName, posts: this.tagPosts[tagName] }))
    }
    @Watch('tagList')
    onTagListChanged() {
      this.initTagList();
    }
    initTagList() {
      reactCom.tagList(this.$refs.tagList, this.tagList.map(tag => `${tag}(${this.tagPosts[tag].length})`));
    }
    goPost(postUrl) {
      router.goPost(postUrl);
    }
    mounted() {
      this.initTagList();
    }
  }
</script>

<style scoped lang="less">

</style>
