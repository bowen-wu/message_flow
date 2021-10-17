import React from 'react';
import dayjs from '../../utils/dayjs';
import scopedClasses from '../../utils/scopedClasses';

import './index.scss';

const sc = scopedClasses('show-time');
const ShowTimeLimit = 3 * 60 * 1000;
const Formatting = 'YYYY-MM-DD HH:mm';

interface ShowTimeProps {
  messageTime: number;
  lastMessageTime: number;
}

const ShowTime = ({ messageTime, lastMessageTime }: ShowTimeProps): JSX.Element => {
  return (
    <div className={sc()} data-testid="time">
      {messageTime - lastMessageTime > ShowTimeLimit ? dayjs(messageTime).format(Formatting) : null}
    </div>
  );
};

export default ShowTime;
