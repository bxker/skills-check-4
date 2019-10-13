import axios from "axios";

//initial state
const initialState = {
  posts: []
};

//const strings
const GET_POSTS = "GET_POSTS";
const GET_SEARCH_POSTS = "GET_SEARCH_POSTS"

//functions
export function getAllPosts() {
  return {
    type: GET_POSTS,
    payload: axios.get(`/api/posts`)
  };
}

export function searchPosts(searchText) {
  return {
    type: GET_SEARCH_POSTS,
    payload: axios.get(`/api/posts/userposts?username=${searchText}`)
  };
}


//reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_POSTS}_FULFILLED`:
      return {
        ...state,
        posts: payload.data
      };
    case `${GET_SEARCH_POSTS}_FULFILLED`:
      return{
        ...state,
        posts: payload.data
      };
    default:
      return state;
  }
}