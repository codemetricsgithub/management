import { NOTICE_POST, POST_ERROR } from "../actions/types";

const INITIALSTATE = {
  message: "",
  error: "",
};

export default function notice (state = INITIALSTATE, action) {
  switch (action.type) {
    case NOTICE_POST:
      return {
        ...state,
        message: action.payload,
      };

    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
