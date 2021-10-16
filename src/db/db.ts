import FriendAvatar from '../assets/images/friend_avatar.jpg';
import SelfAvatar from '../assets/images/self_avatar.jpg';
import { Message, MessageType, User } from './type';

const friend: User = {
  id: '2',
  avatar: FriendAvatar,
  alias: '小明',
  isOnline: true,
  ipAddress: '',
  port: 8080
};

const self: User = {
  id: '0',
  avatar: SelfAvatar,
  alias: '张三',
  isOnline: true,
  ipAddress: '',
  port: 8080
};

export const chatHistory: Message[] = [
  {
    id: '0',
    time: 1634368942485,
    type: MessageType.SYSTEM,
    content: 'You have added 小明 as your WeChat contact. Start chatting!'
  },
  {
    id: '1',
    user: friend,
    time: 1634368952485,
    type: MessageType.TEXT,
    content: 'Hi!我是张三'
  },
  {
    id: '2',
    user: self,
    time: 1634369080975,
    type: MessageType.TEXT,
    content:
      '写一个类似微信渲染消息流的组件。支持不同类型：文本/图片/系统消息，如加某个人到群组里，撤销消息等。'
  },
  {
    id: '3',
    time: 1634369395757,
    type: MessageType.SYSTEM,
    content: 'You recalled a message'
  },
  {
    id: '4',
    user: friend,
    time: 1634370139889,
    type: MessageType.IMAGE,
    content:
      'https://www.ringcentral.com/content/dam/rc-www/en_us/images/content/why-rc-ent/whyrc_ent_image_4.png'
  },
  {
    id: '5',
    user: self,
    time: 1634370341970,
    type: MessageType.IMAGE,
    content:
      'https://www.ringcentral.com/content/dam/rc-www/cn/images/content/advantages/blade_3.png'
  }
];
