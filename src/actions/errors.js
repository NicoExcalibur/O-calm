export const GET_ERRORS = 'GET_ERRORS';
export const SET_ERRORS = 'SET_ERRORS';

export const getErrors = () => ({
  type: GET_ERRORS,
});

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  errors,
});
