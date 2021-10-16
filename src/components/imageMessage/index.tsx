import React from 'react';
import { MessagePropsBase } from '../interface';
import scopedClasses from '../../utils/scopedClasses';
import { mySelf } from '../../db/db';
import UserMessage from '../userMessage';
import './index.scss';

const sc = scopedClasses('image-message');

const ImageMessage = (props: MessagePropsBase) => {
  const { message } = props;
  return (
    <div className={sc()}>
      <UserMessage
        {...props}
        messageWidget={
          <div className={sc({ image: true, isSelf: message.user?.id === mySelf.id })}>
            <img src={message.content} alt="" />
          </div>
        }
      />
    </div>
  );
};

export default ImageMessage;
