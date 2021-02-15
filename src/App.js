import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import searchIcon from '../src/img/search.png'


function App() {
  return (
    <div className="containerApp">
      <header className="header">
       <h1 className="headerTitle">Unsplash</h1>
       <p className="headerSlogan">The internet's source of<a href="https://unsplash.com/license"> freely-usable images.</a>Powered by creators everywhere.</p>
       <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText><img className="searchIcon" src={searchIcon}></img></InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Search free high-resolution photos" />
      </InputGroup>
      <p className="tranding">Tranding: flower, wallpapers, backgrounds, happy, love</p>
      </header>
    </div>
  );
}

export default App;
