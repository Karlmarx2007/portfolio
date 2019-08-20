import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import HomeA from './components/Main/Home/HomeA';
import HomeB from './components/Main/Home/HomeB';
import HomeC from './components/Main/Home/HomeC';
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
