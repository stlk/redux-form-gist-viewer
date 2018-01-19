import React, { Component, PropTypes } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

import Profile from '../components/Profile';
import File from '../components/File';

export default class Gist extends Component {
  render() {
    const { gist } = this.props;

    return (
    <Layout>
      <Profile profile={gist.owner} />
      {Object.keys(gist.files).map(filename =>
        <File filename={filename} gist={gist} />
      )}
    </Layout>
    )
  }
}
