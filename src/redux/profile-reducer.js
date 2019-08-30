import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: "3" },
    { id: 2, message: "It's my first post", likesCount: "5" }
  ],
  newPostText: "default text",
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 3,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case DELETE_POST: {
      return {...state, posts: state.posts.filter(post => post.id != action.postId)}
    }
    default:
      return state;
  }
};

export default profileReducer;

// ---------- Action creators --------- //
export const addPostActionCreator = newPostText => {
  return {
    type: ADD_POST,
    newPostText
  };
};

export const setUserProfile = profile => {
  return {
    type: SET_USER_PROFILE,
    profile
  };
};

export const setStatus = status => {
  return {
    type: SET_STATUS,
    status
  };
};

export const deletePost = postId => {
  return {
    type: DELETE_POST,
    postId
  };
};

// ---------- Thunk creators --------- //

export const getUserProfile = userId => dispatch => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
};

export const getStatus = userId => dispatch => {
  profileAPI.getStatus(userId).then(response => {
    // debugger;
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = status => dispatch => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
