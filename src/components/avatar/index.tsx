import React from 'react';
import scopedClasses from '../../utils/scopedClasses';
import { User } from '../../db/type';
import Default from '../../assets/images/default.png';
import './index.scss';

const sc = scopedClasses('avatar');

interface AvatarProps {
  user: User | undefined;
}

const Avatar = ({ user }: AvatarProps) => {
  return (
    <div className={sc()}>
      <img src={user ? user.avatar : Default} alt="" />
    </div>
  );
};

export default Avatar;