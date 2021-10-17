import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MessageType, User } from '../../../db/type';
import { friend, mySelf } from '../../../db/db';
import UserMessage from '..';

describe('Test Avatar', () => {
  const setup = (user: User) => {
    const time = 1634369395757;
    const lastMessageTime = time - 4 * 60 * 1000;
    const message = {
      id: '1',
      user,
      time: time,
      type: MessageType.TEXT,
      content: 'Hi!我是张三'
    };
    return render(
      <UserMessage
        message={message}
        lastMessageTime={lastMessageTime}
        messageWidget={<div>{message.content}</div>}
      />
    );
  };

  afterEach(() => {
    cleanup();
  });

  it('match snapshot for is self', () => {
    const { asFragment } = setup(mySelf);
    expect(asFragment()).toMatchSnapshot();
  });

  it('match snapshot for is friend', () => {
    const { asFragment } = setup(friend);
    expect(asFragment()).toMatchSnapshot();
  });
});
