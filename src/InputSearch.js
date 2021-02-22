import React, {useState} from 'react';
import './App.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import searchIcon from '../src/img/search.png';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const InputSearch = ({value, valueHandler}) => {

  
  const autoComplete = [
    { title: 'cat'},
    { title: 'island'},
    { title: 'cats'},
    { title: 'sunrise'},
    { title: 'sunset'},
    { title: "beach"},
    { title: 'animals'},
    { title: 'kids'},
    { title: 'people'},
    { title: 'office'},
   
  ]

  const formStyle = {
    backgroundColor: "white", 
    fontSize: "20px",
    
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
const handleMouseClick = (event) => {
    valueHandler(event.target.value)
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
       <div style={{ width: 300, height: 100 }}>
      <Autocomplete
        freeSolo
        disableClearable
        options={autoComplete.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
          style={formStyle}
          onChange={onChange}
          onKeyDown={handleEnterKey}
          onClick={handleMouseClick}
            {...params}
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
            placeholder="Search free high-resolution photos"
          />
        )}
      />
    </div>
       
      <p className="headerTrending">Trending: flower, wallpapers, backgrounds, happy, love</p>
  </div>
  </div>
)
}
export default InputSearch;