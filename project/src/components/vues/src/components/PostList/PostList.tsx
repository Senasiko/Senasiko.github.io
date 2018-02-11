import Vue, { VNode } from 'vue';
import { Component } from 'vue-property-decorator';

interface Post {
  content: string;
  config: {
    description: string,
  };
}

@Component
export default class PostList extends Vue {
  postListUi: Post[] = [];
  init(posts) {
    let listInterval = setInterval(() => {
      if (this.postListUi.length === posts.length) {
        clearInterval(listInterval);
      }else {
        this.postListUi.push(posts[this.postListUi.length]);
      }
    }, 100);
  }
  render(h): any {
    console.log(this.postListUi)
    return (
      <div>
        list:
        <transition-group name="post-list" tag="div" appear={true} >
          {
            this.postListUi.map((post, index) =>
              <div  key={post.content}>
                {
                  post.config.description
                }
              </div>
            )
          }
        </transition-group>
      </div>


    )

  }
}
