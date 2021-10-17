import React from 'react';
import scopedClasses from '../../utils/scopedClasses';
import { MessagePropsBase } from '../interface';
import UserMessage from '../userMessage';
import { mySelf } from '../../db/db';
import './index.scss';

const sc = scopedClasses('text-message');

const TextMessage = (props: MessagePropsBase) => {
  const { message } = props;
  return (
    <div className={sc()} key={message.id}>
      <UserMessage
        {...props}
        messageWidget={
          <div className={sc({ text: true, isSelf: message.user?.id === mySelf.id })}>
            {message.content}
          </div>
        }
      />
    </div>
  );
};

export default TextMessage;
