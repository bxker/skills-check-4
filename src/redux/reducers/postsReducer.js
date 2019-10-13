import axios from "axios";

//initial state
const initialState = {
  posts: []
};

//const strings
const GET_POSTS = "GET_POSTS";

//functions
export function getAllPosts() {
  return {
    type: GET_POSTS,
    payload: axios.get(`/api/posts`)
  };
}


//reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(payload)

  switch (type) {
    case `${GET_POSTS}_FULFILLED`:
      return {
        ...state,
        posts: payload.data
      };
    default:
      return state;
  }
}