
interface vueCom {
  postList?: (dom: Element | any, options: object) => any;
  userMsg?: (dom: Element | any, options: object) => any;
  tagPost?: (dom: Element | any, options: object) => any;
}
declare namespace vueCom {
  let postList: (dom: Element | any, options: object) => any;
  let userMsg: (dom: Element | any, options: object) => any;
  let tagPosts: (dom: Element | any, options: object) => any;
}
