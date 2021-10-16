import React from 'react';
import scopedClasses from '../../utils/scopedClasses';
import { MessagePropsBase } from '../interface';
import ShowTime from '../showTime';

import './index.scss';

const sc = scopedClasses('text-message');

const TextMessage = ({ message, lastMessageTime }: MessagePropsBase) => {
  return (
    <div className={sc()}>
      <ShowTime messageTime={message.time} lastMessageTime={lastMessageTime} />
      This is Text Message!{message.content}
    </div>
  );
};

export default TextMessage;
