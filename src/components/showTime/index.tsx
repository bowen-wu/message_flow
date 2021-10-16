import React from 'react';
import dayjs from 'dayjs';
import scopedClasses from '../../utils/scopedClasses';

import './index.scss';

const sc = scopedClasses('show-time');
const ShowTimeLimit = 3 * 60 * 1000;
const Formatting = 'YYYY-MM-DD';

interface ShowTimeProps {
  messageTime: number;
  lastMessageTime: number;
}

const ShowTime = ({ messageTime, lastMessageTime }: ShowTimeProps) => {
  return (
    <div className={sc()}>
      {messageTime - lastMessageTime > ShowTimeLimit ? dayjs(messageTime).format(Formatting) : null}
    </div>
  );
};

export default ShowTime;
