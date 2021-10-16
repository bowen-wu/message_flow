import React from 'react';
import { Message } from '../../db/type';

import './index.scss';

const ImageMessage = (message: Message) => {
  return <div>This is Image Message!{message.content}</div>;
};

export default ImageMessage;
