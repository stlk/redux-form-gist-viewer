import React, { Component } from 'react';
import * as gistsActionCreator from 'redux/modules/gists';
import { connect } from 'react-redux';

import { GistForm, Profile, File } from 'components';

class Gist extends Component {
  componentDidMount() {
    this.props.loadGist(this.props.match.params.id);
  }

  render() {
    const { gists, gists: { editing } } = this.props;

    const gist = gists.data;
    if (!gists.loaded || !gist) return 'Loading...';

    return (
      <div>
        <Profile profile={gist.owner} />
        <button onClick={() => this.props.editStart(gist.id)}>Edit</button>
        {editing[gist.id] ? (
          <GistForm
            formKey={String(gist.id)}
            key={String(gist.id)}
            initialValues={gist}
          />
        ) : (
          <p>{gist.description}</p>
        )}
        {Object.keys(gist.files).map(filename => (
          <File key={filename} filename={filename} gist={gist} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gists: state.gists,
  };
}

export default connect(mapStateToProps, {
  loadGist: gistsActionCreator.loadDetail,
  editStart: gistsActionCreator.editStart,
})(Gist);
