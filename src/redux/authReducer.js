import { authAPI } from "../components/api/api";

const SET_USERS_DATA = "SET-USERS-DATA";

//const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogin: false,
  isFetching: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.data,
        isLogin: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USERS_DATA,
  data: { userId, email, login },
});




export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

//export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default authReducer;
