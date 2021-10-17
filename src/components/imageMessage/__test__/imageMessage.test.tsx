import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MessageType } from '../../../db/type';
import { friend } from '../../../db/db';
import ImageMessage from '..';

describe('Test imageMessage Component', () => {
  const setup = () => {
    const time = 1634369395757;
    const lastMessageTime = time - 4 * 60 * 1000;
    const message = {
      id: '4',
      user: friend,
      time: 1634369400000,
      type: MessageType.IMAGE,
      content:
        'https://www.ringcentral.com/content/dam/rc-www/en_us/images/content/why-rc-ent/whyrc_ent_image_4.png'
    };
    return render(<ImageMessage message={message} lastMessageTime={lastMessageTime} />);
  };

  it('match snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });

  it('image on click', () => {
    setup();
    fireEvent.click(screen.getByTestId('imageMessage-img'));
    expect(screen.getByTestId('imageMessage-model-image')).toBeInTheDocument();
  });
});
