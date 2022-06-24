import { MessagePropsBase } from '../interface';
import ImageMessage from '../imageMessage';
import SystemMessage from '../systemMessage';
import TextMessage from '../textMessage';
import UserMessage, { UserMessageProps } from '../userMessage';
import { MessageType } from '../../db/type';

interface MessageInterface {
  name: string;
  render: (props: MessagePropsBase) => JSX.Element;
}

export const render = (instance: MessageInterface, props: MessagePropsBase) => {
  return instance.render(props);
};

export const Message = {
  name: 'parent',
  render: function () {
    return null;
  }
};

export const Image = Object.create(Message);
Image.name = MessageType.IMAGE;
Image.render = function (props: MessagePropsBase) {
  return ImageMessage(props);
};

export const System = Object.create(Message);
System.name = MessageType.SYSTEM;
System.render = function (props: MessagePropsBase) {
  return SystemMessage(props);
};

export const Text = Object.create(Message);
Text.name = MessageType.TEXT;
Text.render = function (props: MessagePropsBase) {
  return TextMessage(props);
};

export const User = Object.create(Message);
User.name = 'User';
User.render = function (props: UserMessageProps) {
  return UserMessage(props);
};
