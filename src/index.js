import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, withRouter } from 'react-router-dom';
// import './styles/index.css';
// import App from './App';
// import WineForm from './components/AddEditWineForm';
// import WineList from './components/ViewWines';
// import * as serviceWorker from './serviceWorker';

// const WineWrapper = withRouter(( { history }) =>
//     <WineForm />
//     // If you want to re-direct back to root after submission
//     // do this instead and pass onAddWine in AddEditWineForm function in AddEditWineform.js
//     // <WineForm onAddWine={() => {
//     //     history.push('/');
//     // }} />
// );

// function render() {
//     ReactDOM.render(
//         <BrowserRouter>
//             <Route exact path="/" component={App} />
//             <Route path="/add" component={WineWrapper} />
//             <Route path="/wineList" component={WineList} />
//         </BrowserRouter>, document.getElementById('root'));
// }
// render();

// // ReactDOM.render(<WineCellarReactApp />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
