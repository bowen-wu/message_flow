import React from 'react';
import scopedClasses from '../../utils/scopedClasses';
import ShowTime from '../showTime';
import { MessagePropsBase } from '../interface';
import './index.scss';

const sc = scopedClasses('system-message');

const SystemMessage = ({ message, lastMessageTime }: MessagePropsBase) => {
  return (
    <div className={sc()}>
      <ShowTime messageTime={message.time} lastMessageTime={lastMessageTime} />
    </div>
  );
};

export default SystemMessage;
