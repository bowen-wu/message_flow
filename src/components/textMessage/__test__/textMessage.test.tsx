import React from 'react';
import { render } from '@testing-library/react';
import { MessageType } from '../../../db/type';
import TextMessage from '../index';
import { friend, mySelf } from '../../../db/db';

describe('Test SystemMessage Component', () => {
  it('match friend snapshot', () => {
    const time = 1634369395757;
    const lastMessageTime = time - 4 * 60 * 1000;
    const message = {
      id: '1',
      user: friend,
      time: time,
      type: MessageType.TEXT,
      content: 'Hi!我是张三'
    };
    const { asFragment } = render(
      <TextMessage message={message} lastMessageTime={lastMessageTime} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('match mySelf snapshot', () => {
    const time = 1634369395757;
    const lastMessageTime = time - 4 * 60 * 1000;
    const message = {
      id: '2',
      user: mySelf,
      time: time,
      type: MessageType.TEXT,
      content:
        '写一个类似微信渲染消息流的组件。支持不同类型：文本/图片/系统消息，如加某个人到群组里，撤销消息等。'
    };
    const { asFragment } = render(
      <TextMessage message={message} lastMessageTime={lastMessageTime} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
