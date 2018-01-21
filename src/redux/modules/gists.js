const LOAD = 'redux-example/gists/LOAD';
const LOAD_SUCCESS = 'redux-example/gists/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/gists/LOAD_FAIL';
const LOAD_DETAIL = 'redux-example/gists/LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'redux-example/gists/LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_FAIL = 'redux-example/gists/LOAD_DETAIL_FAIL';
const EDIT_START = 'redux-example/gists/EDIT_START';
const EDIT_STOP = 'redux-example/gists/EDIT_STOP';
const SAVE = 'redux-example/gists/SAVE';
const SAVE_SUCCESS = 'redux-example/gists/SAVE_SUCCESS';
const SAVE_FAIL = 'redux-example/gists/SAVE_FAIL';

const initialState = {
  loaded: false,
  editing: {},
  saveError: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        list: action.result,
        error: null,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        list: null,
        error: action.error,
      };
    case LOAD_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case LOAD_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null,
      };
    case LOAD_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error,
      };
    case EDIT_START:
      return {
        ...state,
        editing: {
          ...state.editing,
          [action.id]: true,
        },
      };
    case EDIT_STOP:
      return {
        ...state,
        editing: {
          ...state.editing,
          [action.id]: false,
        },
      };
    case SAVE:
      return state; // 'saving' flag handled by redux-form
    case SAVE_SUCCESS:
      return {
        ...state,
        data: action.result,
        editing: {
          ...state.editing,
          [action.id]: false,
        },
        saveError: {
          ...state.saveError,
          [action.id]: null,
        },
      };
    case SAVE_FAIL:
      return typeof action.error === 'string'
        ? {
            ...state,
            saveError: {
              ...state.saveError,
              [action.id]: action.error,
            },
          }
        : state;
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.gists && globalState.gists.loaded;
}

export function load(name) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(`https://api.github.com/users/${name}/gists`),
  };
}

export function loadDetail(id) {
  return {
    types: [LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAIL],
    promise: client => client.get(`https://api.github.com/gists/${id}`),
  };
}

export function save(gist) {
  return {
    types: [SAVE, SAVE_SUCCESS, SAVE_FAIL],
    id: gist.id,
    promise: client =>
      client.patch(
        `https://api.github.com/gists/${gist.id}?access_token=${
          process.env.REACT_APP_GITHUB_ACCESS_TOKEN
        }`,
        {
          data: gist,
        },
      ),
  };
}

export function editStart(id) {
  return { type: EDIT_START, id };
}

export function editStop(id) {
  return { type: EDIT_STOP, id };
}
