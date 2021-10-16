import { Message } from '../db/type';

export interface MessagePropsBase {
  message: Message;
  lastMessageTime: number;
}
