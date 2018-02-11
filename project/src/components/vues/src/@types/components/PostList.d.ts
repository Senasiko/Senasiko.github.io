import Vue from 'vue'

declare module 'vue/types/vue' {
// 3. 声明为 Vue 补充的东西

  class PostList {
    init(posts: any[]): void
  }
  interface Vue extends PostList{
  }
}
