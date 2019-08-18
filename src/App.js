import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import HomeA from './components/Main/HomeA';
import HomeB from './components/Main/HomeB';
import HomeC from './components/Main/HomeC';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeA />
      <HomeB />
      <HomeC />
      <Footer />
    </div>
  );
}

export default App;
