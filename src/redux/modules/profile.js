const LOAD = 'redux-example/profile/LOAD';
const LOAD_SUCCESS = 'redux-example/profile/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/profile/LOAD_FAIL';

const initialState = {
  loaded: false,
  editing: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.profile && globalState.profile.loaded;
}

export function load(name) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(`https://api.github.com/users/${name}`)
  };
}
