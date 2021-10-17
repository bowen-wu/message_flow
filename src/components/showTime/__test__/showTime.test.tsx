import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowTime from '../index';
import dayjs from 'dayjs';

const Formatting = 'YYYY-MM-DD HH:mm';

describe('Test ShowTime Component', () => {
  it('show time', () => {
    const now = Date.now();
    const content = dayjs(now).format(Formatting);
    render(<ShowTime messageTime={now} lastMessageTime={0} />);
    expect(screen.getByTestId('time')).toHaveTextContent(content);
  });

  it('show null', () => {
    const now = Date.now();
    render(<ShowTime messageTime={now} lastMessageTime={now + 1000} />);
    // eslint-disable-next-line no-console
    console.log(dayjs(1634369400000).format(Formatting));
    expect(screen.getByTestId('time')).toBeEmptyDOMElement();
  });
});
