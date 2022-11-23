import './App.css';
import ApiCall from './components/ApiCall';
import SearchForm from './components/SearchForm';
import { useState } from 'react';
import MainNavigation from './components/MainMavigation';
import PopularDestination from './components/PopularDestination';

function App() {

  const [location, setLocation] = useState('');

  const updateLocation = (destination) => {
    setLocation(destination)
  }



  return (

    <>
      <MainNavigation enteredDestination = {location} />

      <div className='backgroundImg'>
        <SearchForm onAddLocation={updateLocation} />
      </div>

      <PopularDestination onAddLocation ={updateLocation}/>
      {location && <ApiCall enteredDestination={location} />}
    
    </>

  );
}

export default App;
