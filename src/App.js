import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputSearch from '../src/InputSearch'


function App() {

  return (
    <div className="containerApp">
      <header className="header">
       <h1 className="headerTitle">Unsplash</h1>
       <p className="headerSlogan">The internet's source of<a href="https://unsplash.com/license"> freely-usable images.</a><br/>Powered by creators everywhere.</p>
       <InputSearch/>
      <p className="headerTrending">Trending: flower, wallpapers, backgrounds, happy, love</p>
      </header>
    </div>
  );
}

export default App;
