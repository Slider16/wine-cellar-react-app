import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';

// import logo from './logo.svg';
// import '../styles/WineCellarReactApp.css';
import './styles/bootstrap.min.css';
import Sidebar from './components/Sidebar';

function Header() {
  return (<div className="row">
    <div className="col-12">
        <div className="App">
          <header className="App-header">
            <img src={"./wine-bottles.png"} className="App-logo" alt="logo" />
            <p>
              Wine Cellar React App
            </p>
          </header>
        </div>   
      </div> 
  </div>)
}

function Footer() {
  return (<div id="footer" className="row">
    <div className="col-12">
      <div><p><Link to="/add">Add/Edit Wines</Link></p></div>
      <div><p><Link to="/wineList">Wine List</Link></p></div>
      <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
    </div>
  </div>)
}

function App() {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <div className="container">
        <div className="jumbotron col-10 offset-1">
          <Header />  
          <Footer/> 
        </div>                
      </div>
    </div>
  );
}

export default App;
