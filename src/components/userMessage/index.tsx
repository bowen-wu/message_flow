import React, { ReactNode } from 'react';
import { MessagePropsBase } from '../interface';
import scopedClasses from '../../utils/scopedClasses';
import ShowTime from '../showTime';
import { mySelf } from '../../db/db';
import Avatar from '../avatar';
import './index.scss';

const sc = scopedClasses('user-message');

interface UserMessageProps extends MessagePropsBase {
  messageWidget: ReactNode;
}

const UserMessage = ({ message, lastMessageTime, messageWidget }: UserMessageProps) => {
  const isSelf = message.user?.id === mySelf.id;
  return (
    <div className={`${sc()} ${sc({ isSelf: message.user?.id === mySelf.id })}`}>
      <ShowTime messageTime={message.time} lastMessageTime={lastMessageTime} />
      <div className={sc('main')}>
        {isSelf ? messageWidget : null}
        <Avatar user={message.user} />
        {isSelf ? null : messageWidget}
      </div>
    </div>
  );
};

export default UserMessage;
