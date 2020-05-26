import React from 'react';
import Header from './components/header'
import SearchBar from './components/searchBar'
import Results from './components/searchCard'

function App() {
  return (
   <div>
     <Header />
     <SearchBar />
     <Results />
   </div>
  );
}

export default App;