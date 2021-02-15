import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import searchIcon from '../src/img/search.png';


function App() {

  const formStyle = {
    backgroundColor: "white",
    fontSize: "20px",
    borderRight:"none"
  }
  const inputStyle = {
    borderLeft:"none"
  }

  return (
    <div className="containerApp">
      <header className="header">
       <h1 className="headerTitle">Unsplash</h1>
       <p className="headerSlogan">The internet's source of<a href="https://unsplash.com/license"> freely-usable images.</a><br/>Powered by creators everywhere.</p>
       <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText style={formStyle}><img className="searchIcon" src={searchIcon} alt="loupe icon"></img></InputGroupText>
        </InputGroupAddon>
        <Input style={inputStyle} size="100" placeholder="Search free high-resolution photos" />
      </InputGroup>
      <p className="headerTrending">Trending: flower, wallpapers, backgrounds, happy, love</p>
      </header>
    </div>
  );
}

export default App;
