import React, {useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const InputSearch = ({value, valueHandler}) => {

  
  const autoComplete = [
    { title: 'cat'},
    { title: "beach"},
    { title: "people"},
    { title: "island"},
    { title: "sunset"},
    { title: "sunrise"},
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

const handleButtonSearch = (e) => {
  valueHandler(inputValue)
}

  const onChange = (e) => {
    const {value}=e.target;
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
        onChange={(event, value) => setInputValue(value)}
        renderInput={(params) => (
          <TextField
          style={formStyle}
          onChange={onChange}
          onKeyDown={handleEnterKey}
            {...params}
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
            placeholder="Search free high-resolution photos"
          />
        )}
      />
      <button onClick={handleButtonSearch}>Search</button>
    </div>
       
      <p className="headerTrending">Trending: flower, wallpapers, backgrounds, happy, love</p>
  </div>
  </div>
)
}
export default InputSearch;