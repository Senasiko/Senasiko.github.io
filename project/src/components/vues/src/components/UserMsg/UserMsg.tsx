import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

interface MsgType {
  icon?: string;
  value?: string;
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
  getMsg(msg) {
    return (
      <div class={['msg-item', !msg.value && 'inline-item']}>
        { msg.icon && <i class={msg.icon}/> }
        <span>{ msg.value }</span>
      </div>
    )
  }
  render() {
    const user = this.user;
    return (
      <transition name='user-msg' appear={true} >
        <div class={['user-msg']} >
          {
            // <span :class="['hide-user', showUser?'arrow':'arrow']" @click="showUser = !showUser"></span>
          }
          <img src={user.img} alt="头像"/>
          {
            user.msgs.map(msg => msg.link?
              <a href={msg.link} target="_blank" class={'link'}>
                { this.getMsg(msg) }
              </a>
              : this.getMsg(msg)
            )
          }
        </div>
      </transition>
    )
  }
}
