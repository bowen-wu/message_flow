import React from 'react';
import { Message } from '../../db/type';
import './index.scss';

const SystemMessage = (message: Message) => {
  return <div>This is System Message!{message.content}</div>;
};

export default SystemMessage;
