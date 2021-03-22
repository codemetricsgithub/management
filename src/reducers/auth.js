import {
  AUTH_USER,
  UNAUTH_USER,
  LOGIN_ERROR,
  STUDENT_USER,
  STUDENT_ERROR,
} from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
};

export default function auth (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      // return { ...state, authenticated: action.payload };
      return { ...state, authenticated: true };

      case UNAUTH_USER:
        return {
          ...state,
          errorMessage: "",
          authenticated: false,
        };
    case LOGIN_ERROR:
      return { ...state, errorMessage: action.payload };
    case STUDENT_USER:
      return { ...state, authenticated: action.payload };
    case STUDENT_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}


// function (state = INITIAL_STATE, action) {
//   switch (action.type) {
   

//     default:
//       return state;
//   }
// }

// export default auth;

// switch (action.type){
//     default
