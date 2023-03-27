import React, {useState} from 'react'


function SearchBar({setSearchTerm}) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setSearchTerm(inputValue);
  };




  return (
    <div className="searchBar">
          <input
           type="text" 
           placeholder="Search for location"
           value={inputValue}
           onChange={(event) =>setInputValue(event.target.value)}
           />
           <button onClick={handleClick}>Search</button>

       
         
    </div>
  )
}

export default SearchBar;