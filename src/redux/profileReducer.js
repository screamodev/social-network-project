const ADD_POST = "ADD-POST";
const ADD_UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, message: "Hi, i am john", likesCount: 12 },
    { id: 2, message: "welcome", likesCount: 18 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };

      state.postsData.push(newPost);
      state.newPostText = "";

      return state;
    case ADD_UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }

  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (text) => ({
  type: ADD_UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
