import React from 'react';
import { render } from '@testing-library/react';
import { friend } from '../../../db/db';
import Avatar from '..';

describe('Test Avatar', () => {
  it('match snapshot', () => {
    const { asFragment } = render(<Avatar user={friend} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('use default avater', () => {
    const { asFragment } = render(<Avatar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
