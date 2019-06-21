import { usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: "3" },
    { id: 2, message: "It's my first post", likesCount: "5" }
  ],
  newPostText: "default text",
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }
};

export default profileReducer;

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
};

// ---------- Action creators --------- //

export const updateNewPostTextActionCreator = value => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: value
  };
};

export const setUserProfile = profile => {
  return {
    type: SET_USER_PROFILE,
    profile
  };
};

// ---------- Thunk creators --------- //

export const getUserProfile = userId => dispatch => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
};
