import React from 'react';
import { render } from '@testing-library/react';
import { MessageType } from '../../../db/type';
import SystemMessage from '../index';

describe('Test SystemMessage Component', () => {
  it('match snapshot', () => {
    const time = 1634369395757;
    const lastMessageTime = time - 4 * 60 * 1000;
    const message = {
      id: '3',
      time: time,
      type: MessageType.SYSTEM,
      content: 'You recalled a message'
    };
    const { asFragment } = render(
      <SystemMessage message={message} lastMessageTime={lastMessageTime} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
