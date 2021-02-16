import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import searchIcon from '../src/img/search.png';


function InputSearch(){

    const formStyle = {
        backgroundColor: "white",
        fontSize: "20px",
        borderRight:"none"
      }
      const inputStyle = {
        borderLeft:"none"
      }

return (
    <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText style={formStyle}><img className="searchIcon" src={searchIcon} alt="loupe icon"></img></InputGroupText>
    </InputGroupAddon>
    <Input style={inputStyle} size="100" placeholder="Search free high-resolution photos" />
  </InputGroup>
);
}

export default InputSearch;