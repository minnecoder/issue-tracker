import React from 'react';
// import { Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Sidebar from './Sidebar';
import Header from './Header';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
