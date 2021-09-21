const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "John" },
    { id: 2, name: "Alan" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Sofia" },
  ],
  messagesData: [
    { id: 1, message: "hi" },
    { id: 2, message: "hello" },
    { id: 3, message: "how are you" },
  ],
  newMessageBody: "",
};


const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
       return {
        ...state,
        newMessageBody: action.body,
        
      };
      
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
