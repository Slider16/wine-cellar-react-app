import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import WinesPage from "./WinesPage";
import AddEditWineForm from "./EditWinesPage";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/wines" exact component={WinesPage} />
        <Route path="/addeditwine"component={AddEditWineForm}/>
        <Route path="/about" exact component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
