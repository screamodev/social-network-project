import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer.js";
import profileReducer from "./profileReducer.js";

let store = {
  _state: {
    //posts

    profilePage: {
      postsData: [
        { id: 1, message: "Hi, i am john", likesCount: 12 },
        { id: 2, message: "welcome", likesCount: 18 },
      ],
      newPostText: "",
    },
    //dialogs
    dialogsPage: {
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
    },
    //sidebar
    sideBar: {},
  },
  _callSubcriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },

  subscribe(callback) {
    this._callSubcriber = callback;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubcriber(this._state);
  },
};

export default store;
