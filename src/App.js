import './App.css';
import Title from './components/Title';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Description from './components/Description';
import Bottom from './components/Bottom';
import { useState, useEffect } from 'react';



function App() {

  const [data, setData]= useState({})
  const [location, setLocation] =useState('')

const url ="https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cc0938f5c5704d3c39799aff9a469acc"
const handleCityChange = (e) => {
  setCity(e.target.value);
};
onst handleSearch = () => {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not fetch weather data for that city.");
      }
      return response.json();
    })
    .then((data) => {
      setData(data);
      setLocation(`${data.name}, ${data.weather[0].description}`);
      setError(null);
    })
    .catch((error) => {
      setError(error.message);
      setData(null);
      setLocation(null);
    });
};

useEffect(() => {
  if (city !== "") {
    handleSearch();
  }
}, [city]);



  return (
    <div className="App">
    <Title/>
     <Nav/> 
    <SearchBar/>
    <Description/>
    <Bottom/>
 
    
    </div>
  );
}

export default App;
