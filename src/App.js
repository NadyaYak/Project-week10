import './App.css';
import Title from './components/Title';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Description from './components/Description';
import Bottom from './components/Bottom';
import { useState, useEffect } from 'react';



function App() {
    const apiKey ="cc0938f5c5704d3c39799aff9a469acc";
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData]= useState({});
  
    const getData = async (searchTerm) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}`
      );
      const data = await response.json();
      setData(data);
    };
  
    useEffect(() => {
      getData(searchTerm);
    }, [searchTerm]);
  
    return (
      <div className="App">
        <Title />
        <Nav />
        <SearchBar setSearchTerm={setSearchTerm} />
        <Description data={data} />
        <Bottom />
      </div>
    
    </div>
  );
}

export default App;
