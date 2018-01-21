import * as gistsActionCreator from '../redux/modules/gists';
import * as profileActionCreator from '../redux/modules/profile';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Profile from '../components/Profile';

class Home extends Component {
  componentDidMount() {
    this.props.loadGists('stlk');
    this.props.loadProfile('stlk');
  }

  render() {
    const { gists, profile } = this.props;

    if (!gists.loaded) return 'Loading...';
    if (!profile.loaded) return 'Loading...';

    return (
      <div>
        <Profile profile={profile.data} />
        <ul>
          {gists.list.map(gist => (
            <li key={gist.id}>
              <a href={`/gist/${gist.id}`}>
                {gist.files[Object.keys(gist.files)[0]].filename}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gists: state.gists,
    profile: state.profile,
  };
}

export default connect(mapStateToProps, {
  loadProfile: profileActionCreator.load,
  loadGists: gistsActionCreator.load,
})(Home);
