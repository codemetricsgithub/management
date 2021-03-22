import React from "react";
import { Route, Switch } from "react-router-dom";
//imported Componemts
import Contactus from "../components/contacts/Contactus";
import Landingpage from "../components/landingpage";
import LoginPage from "../components/logins/LoginPage";
import LogoutPage from "../components/logins/LogoutPage";
import Managment from "../components/managment/Managment";
import AdmissionForm from "../components/AdmissionForm";
import UpdateList from "../components/UpdateList";
import ErrorPage from "../components/ErrorPage";
import NoticePost from "../components/NoticePost";
import NoticeBoard from "../components/Home/NoticeBoard";
import EditNotice from "../components/EditNotice";
import ListView from "../components/ListView";
import Imguploads from "../components/imageuploads/Imguploads";
import requireAuth from "../components/requireAuth";
import deRequireAuth from "../components/deRequireAuth";
import ManagmentRegister from "../components/managment/signupmanagment/ManagmentRegister";

function PathManager() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/notice-post" component={requireAuth(NoticePost)} />
        <Route exact path="/management" component={requireAuth(Managment)} />
        <Route exact path="/loginpage" component={deRequireAuth(LoginPage)} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/admissionForm" component={AdmissionForm} />
        <Route exact path="/listView" component={requireAuth(ListView)} />
        <Route exact path="/notice-auth" component={requireAuth(NoticeBoard)} />
        <Route exact path="/logout" component={requireAuth(LogoutPage)} />
        <Route exact path="/uploadsimg" component={requireAuth(Imguploads)} />
        <Route exact path="/updateList/:id" component={UpdateList} />
        <Route exact path="/signupmanagment" component={ManagmentRegister} />
        <Route
          exact
          path="/edit-notice/:id"
          component={requireAuth(EditNotice)}
        />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default PathManager;
