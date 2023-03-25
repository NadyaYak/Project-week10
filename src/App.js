import './App.css';
import Title from './components/Title';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Description from './components/Description';
import Bottom from './components/Bottom';
import { useState } from 'react';



function App() {
const url ="https://api.openweathermap.org/data/2.5/weather?q=Brooklyn&appid=cc0938f5c5704d3c39799aff9a469acc";
  
  const [data, setData] = useState({})
  const [location, setLocation]=useState('')

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
