import React, {useState} from 'react';
import './App.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import searchIcon from '../src/img/search.png';

const InputSearch = ({value, valueHandler}) => {
  const autoComplete = [
    "apple",
    "apricot",
    "banana",
    "carrot",
    "unicorn",
    "cat",
    "island",
    "beach",
    "sunrise",
    "sunset", 
  ];

  const formStyle = {
    backgroundColor: "white", 
    fontSize: "20px",
    borderRight:"none"
  }
  const inputStyle = {
    borderLeft:"none",
    width:"50%"
  }
 
  const [ inputValue, setInputValue] = useState('');

const handleEnterKey = (event) => {
  if (event.code === 'Enter') {
    valueHandler(event.target.value)
  }
}

  const onChange = (e) => {
    const {
      value
    }=e.target;
setInputValue(value);
  }

return(
  <div>
     <div className="containerApp">
       <h1 className="headerTitle">Unsplash</h1>
       <p className="headerSlogan">The internet's source of<a className="headerSloganLink" href="https://unsplash.com/license"> freely-usable images.</a><br/>Powered by creators everywhere.</p>
       <InputGroup size="sm">
       <InputGroupAddon addonType="prepend">
      <InputGroupText style={formStyle}><img className="searchIcon" src={searchIcon} alt="loupe icon"></img></InputGroupText>
    </InputGroupAddon>
    <Input onChange={onChange} onKeyDown={handleEnterKey} option={autoComplete} type="text" style={inputStyle} placeholder="Search free high-resolution photos"/>
    </InputGroup>
      <p className="headerTrending">Trending: flower, wallpapers, backgrounds, happy, love</p>
      
    
    
    
  </div>
  </div>
)
}
export default InputSearch;