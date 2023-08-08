// Action type constants
const POST_REQUEST = 'POST_REQUEST';
const POST_SUCCESS = 'POST_SUCCESS';
const POST_FAILURE = 'POST_FAILURE';

// Action creators
export const postRequest = (request) => {
 return{
    type: POST_REQUEST, 
    payload: request
  }
}

export const postSuccess = (success) => {
  return {
    type: POST_SUCCESS,
    payload: success
  }
};

export const postFailure = (error) => {
  return {
    type: POST_FAILURE,
    payload: error
  }
};



