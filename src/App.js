import './App.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Title from './components/Title';


function App() {
  return (
    <div className="App">
    <Title/>
    <SearchBar/>
    <Nav/>
    </div>
  );
}

export default App;
