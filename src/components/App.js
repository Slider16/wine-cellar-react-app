import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import WinesPage from "./WinesPage";
import EditWinesPage from "./EditWinesPage";
import NavBar from "./common/NavBar";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/wines" exact component={WinesPage} />
        <Route path="/editwines/:slug" component={EditWinesPage} />
        <Route path="/editwines" component={EditWinesPage} />
        <Route path="/about" exact component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
