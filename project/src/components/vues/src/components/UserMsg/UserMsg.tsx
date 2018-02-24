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
            user.msgs.map(msg =>
              <div class={'msg-item'}>
                <i v-if="msg.icon" class={msg.icon}></i>
                <span v-if="!msg.link && msg.value" >{ msg.value }</span>
                <a v-if="msg.link && msg.value" href={msg.link} target="_blank">{ msg.value }</a>
              </div>
            )
          }
        </div>
      </transition>
    )
  }
}
