import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputSearch from './InputSearch';
import SecondPage from './SecondPage'
import {getData} from './Api';

function App() {
  const [querySearch, setQuerySearch] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isShowResult, setIsShowResult] = useState(false); 
 
 useEffect(() => {
  if (querySearch) {
    getData(querySearch).then((result) => {
      setPhotos(result.results);
      setIsShowResult(true);
    }
    )
  }
},[querySearch])

  return (
    <div>
         {
           !isShowResult &&
           <InputSearch value={querySearch} valueHandler={setQuerySearch}/>
         }
         {
          isShowResult &&
           <SecondPage  data={photos} dataHendler={setPhotos}/>   
         }
    
    </div>
  );
}

export default App;
