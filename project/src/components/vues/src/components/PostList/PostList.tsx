import Vue, { VNode } from 'vue';
import { Component } from 'vue-property-decorator';

interface Post {
  content: string;
  config: {
    title: string;
    tags: string[];
    description: string;
  };
  date: string;
  postUrl: string;
}

@Component
export default class PostList extends Vue {
  postListUi: Post[] = [];
  init(posts: Post[]) {
    let listInterval = setInterval(() => {
      if (this.postListUi.length === posts.length) {
        clearInterval(listInterval);
      }else {
        let post = posts[this.postListUi.length];
        this.postListUi.push(post);
        this.$nextTick(() => {
          this.$refs[this.getPostRef(post, 'content')]['innerHTML'] = post.content;
          reactCom.tagList(this.$refs[this.getPostRef(post,'tagList')], post.config.tags || []);
        })
      }
    }, 100);
  }
  getPostRef(post: Post, name: string) {
    return post.config.title + name
  }
  render(h): any {
    return (
      <div class='post-list-container'>
        <transition-group name="post-list" tag="div" class='post-list' appear={true} >
          {
            this.postListUi.map((post, index) =>
              <div class='post-item' key={post.config.title}>
                <h1 class='post-item-title'>
                  <a href={`${post.postUrl}`} target='__blank'>{ post.config.title }</a>
                  <span class='post-item-date'>{ post.date }</span>
                </h1>
                <h4 class='post-item-description'>
                  { post.config.description }
                </h4>
                <p class='post-item-content markdown-body' ref={this.getPostRef(post, 'content')}>
                </p>
                <div class='post-item-operator'>
                  <div class='post-item-tag' ref={this.getPostRef(post, 'tagList')}></div>
                  <div class='flex'></div>
                  <a class='post-item-goAll' href={`${post.postUrl}`} target='__blank'>
                    展开全文
                  </a>
                </div>
              </div>
            )
          }
        </transition-group>
      </div>


    )

  }
}
