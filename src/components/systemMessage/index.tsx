import React from 'react';
import scopedClasses from '../../utils/scopedClasses';
import ShowTime from '../showTime';
import { MessagePropsBase } from '../interface';
import './index.scss';

const sc = scopedClasses('system-message');

const SystemMessage = ({ message, lastMessageTime }: MessagePropsBase) => {
  return (
    <div className={sc()} key={message.id}>
      <ShowTime messageTime={message.time} lastMessageTime={lastMessageTime} />
      <div className={sc('text')}>{message.content}</div>
    </div>
  );
};

export default SystemMessage;
