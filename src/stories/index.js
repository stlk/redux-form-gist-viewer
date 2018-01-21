import React from 'react';

import { storiesOf } from '@storybook/react';

import Profile from '../components/Profile';

storiesOf('Profile', module)
  .add('with name', () => (
    <Profile
      profile={{
        name: 'some cool name',
        avatar_url: 'https://httpbin.org/image/jpeg',
      }}
    />
  ))
  .add('with login', () => (
    <Profile
      profile={{
        login: 'some-login',
        avatar_url: 'https://httpbin.org/image/jpeg',
      }}
    />
  ));
