
import { toast } from "react-toastify";
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

// Thunk action creator
export const postData = (data) => {
  return ( dispatch ) => {
     dispatch(postRequest("request"));
     return  fetch('http://localhost:3021/post-product', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({...data, date: new Date()})
          })
          .then(res => res.json())
            .then((data) => {
            if(data.data){
                toast.success("Congrasulation you product data added successfully !!");
                dispatch(postSuccess("success"));
            }
            })
            .catch((error) => {
           console.log("error", error);
          dispatch(postFailure(error));
      });
  };
};

