import logo from './logo.svg';
import './App.css';
import ApiCall from './components/ApiCall';
import SearchForm from './components/SearchForm';
import { useState } from 'react';

function App() {

  const [location, setLocation] = useState('');

  const updateLocation = (destination) => {
     setLocation(destination)
  }



  return (
    // <div className="App">
    <>
      <h1>Lest start</h1>
      
      <SearchForm onAddLocation = {updateLocation}/>

      {console.log(location)}
    
      {location && <ApiCall enteredDestination = {location} />}
      </>
    // </div>
  );
}

export default App;
