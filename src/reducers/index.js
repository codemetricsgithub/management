import { combineReducers } from "redux";
import auth from "./auth";
import noticeBoard from "./noticeBoard";
import { reducer as formReducer } from "redux-form";
import noticePost from "./notice";

export default combineReducers({
  auth: auth,
  // profile: profileReducer,

  form: formReducer,
  notice: noticePost,
  noticeBoard: noticeBoard,
});
