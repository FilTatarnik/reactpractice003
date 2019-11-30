import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Carosel from './Carosel';
import Footer from './Footer';
import CardComp from './CardComp';
import Content from './Content';
import Jumbotron from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardComp />
      <Content />

    </div>
  );
}

export default App;
