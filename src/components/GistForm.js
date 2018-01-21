import React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as gistsActionCreator from 'redux/modules/gists';
import { connect } from 'react-redux';

let GistForm = props => {
  const { handleSubmit, pristine, submitting, formKey, editStop, save } = props;
  return (
    <form
      onSubmit={handleSubmit(values =>
        save(values).then(result => {
          if (result && typeof result.error === 'object') {
            return Promise.reject(result.error);
          }
        }),
      )}
    >
      <div>
        <label>Description</label>
        <div>
          <Field name="description" component="input" type="text" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button
          type="button"
          disabled={pristine || submitting}
          onClick={() => editStop(formKey)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

GistForm = reduxForm({
  form: 'gist-edit',
})(GistForm);

export default connect(() => ({}), gistsActionCreator)(GistForm);
