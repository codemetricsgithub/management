import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AUTH_USER } from "../actions/types";
import Footer from "../components/landingpage/Footer";
import store from "../store/store";
import NavLinks from "./NavLinks";
import PathManager from "./PathManager";
const token = localStorage.getItem("token");

if(token){
  store.dispatch({type: AUTH_USER})
}

function RouteHandlers() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          {/* <CommonHeader /> */}
          <NavLinks />
          <PathManager />
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default RouteHandlers;
