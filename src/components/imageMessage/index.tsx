import React from 'react';
import { MessagePropsBase } from '../interface';
import scopedClasses from '../../utils/scopedClasses';
import ShowTime from '../showTime';
import './index.scss';

const sc = scopedClasses('image-message');

const ImageMessage = ({ message, lastMessageTime }: MessagePropsBase) => {
  return (
    <div className={sc()}>
      <ShowTime messageTime={message.time} lastMessageTime={lastMessageTime} />
      This is Image Message!{message.content}
    </div>
  );
};

export default ImageMessage;
