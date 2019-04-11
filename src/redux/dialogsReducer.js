const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Jorica" },
    { id: 2, name: "Petrica" },
    { id: 3, name: "Volodea" },
    { id: 4, name: "Anton" },
    { id: 5, name: "Cocos" }
  ],
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "How are you" },
    { id: 4, message: "Fine" },
    { id: 5, message: "Good" }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      break;
    case SEND_MESSAGE:
      const body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      break;
    default:
      return state;
  }
  return state;
};
export default dialogsReducer;

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  };
};

export const updateNewMessageBodyCreator = body => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  };
};
