import './App.css';
import Title from './components/Title';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Description from './components/Description';
import Bottom from './components/Bottom';


function App() {
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
