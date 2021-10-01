import { authAPI } from "../components/api/api";
import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

//const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  initialized: false,
  email: null,
  login: null,
  isLogin: false,
  isFetching: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

//thunka

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

//export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default appReducer;
