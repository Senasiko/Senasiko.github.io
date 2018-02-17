import Vue from 'vue'

declare module 'vue/types/vue' {
// 3. 声明为 Vue 补充的东西

  interface Vue {
    init?(data: any | any[]): void;
  }
}
