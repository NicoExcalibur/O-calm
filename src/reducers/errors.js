import { SET_ERRORS } from 'src/actions/errors';

const initialState = {
  errors: '',
};

const errors = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };

    default: return state;
  }
};

export default errors;
