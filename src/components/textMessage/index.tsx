import React from 'react';
import { Message } from '../../db/type';

import './index.scss';

const TextMessage = (message: Message) => {
  return <div>This is Text Message!{message.content}</div>;
};

export default TextMessage;
