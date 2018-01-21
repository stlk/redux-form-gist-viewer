import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Home } from 'containers/Home';

it('renders without crashing', () => {
  var gists = {
    list: [
      {
        id: 'id',
        files: {
          'some.js': {},
        },
      },
    ],
    loaded: true,
  };
  var profile = {
    loaded: true,
    data: {
      name: 'joe doe',
      avatar_url: 'some/path',
    },
  };
  var result = renderer
    .create(
      <MemoryRouter>
        <Home
          gists={gists}
          profile={profile}
          loadGists={() => {}}
          loadProfile={() => {}}
        />
      </MemoryRouter>,
    )
    .toJSON();
  expect(result).toMatchSnapshot();
});
