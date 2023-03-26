import React from 'react'


function SearchBar(props) {
  return (
    <div className="searchBar">
          <input type="text" 
          value={location}
          onChange={event =>setLocation(event.target.value)}
          placeholder="Search for location"></input>
          <Button label="Search" onClick={handleSearch} />
      {data && location && <Weather data={data} location={location} />}
      {error && <Error message={error} />}
 
    </div>
  )
}

export default SearchBar;