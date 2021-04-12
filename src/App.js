import React from 'react';


import NavBar from './components/NavBar';
import City from './components/City';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
       
        <City/>
        <Footer/>


      </header>
    </div>
  );
}

export default App;
