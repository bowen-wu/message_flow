import React from 'react';
import scopedClasses from '../../utils/scopedClasses';
import { MessagePropsBase } from '../interface';
import ShowTime from '../showTime';
import Avatar from '../avatar';
import { mySelf } from '../../db/db';

import './index.scss';

const sc = scopedClasses('text-message');

const TextMessage = ({ message, lastMessageTime }: MessagePropsBase) => {
  const isSelf = message.user?.id === mySelf.id;
  return (
    <div className={sc()}>
      <ShowTime messageTime={message.time} lastMessageTime={lastMessageTime} />
      <div className={sc({ main: true, isSelf: message.user?.id === mySelf.id })}>
        {isSelf ? <div className={sc('main-text')}>{message.content}</div> : null}
        <Avatar user={message.user} />
        {isSelf ? null : <div className={sc('main-text')}>{message.content}</div>}
      </div>
    </div>
  );
};

export default TextMessage;
