const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Jorica'},
        {id: 2, name: 'Petrica'},
        {id: 3, name: 'Volodea'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Cocos'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Fine'},
        {id: 5, message: 'Good'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};
export default dialogsReducer;

export const sendMessageCreator = newMessageBody => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    };
};
