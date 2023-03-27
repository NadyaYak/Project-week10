import './App.css';
import Title from './components/Title';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Description from './components/Description';
import Bottom from './components/Bottom';
import { useState, useEffect } from 'react';



function App() {
  const apiKey =cc0938f5c5704d3c39799aff9a469acc

  const [data, setData]= useState({})
  const getData = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
     'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}'


      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
 /* const [location, setLocation] =useState('')

let response = fetch()
 fetch()
 .then(response=>{*/

 })

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
