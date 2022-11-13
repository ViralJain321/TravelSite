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

    <>
      <SearchForm onAddLocation={updateLocation} />
      {location && <ApiCall enteredDestination={location} />}
    </>

  );
}

export default App;
