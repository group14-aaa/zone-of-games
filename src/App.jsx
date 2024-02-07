import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Home from './pages/index';
import SearchAppBar from './components/SearchAppBar';

import './App.css'

function App() {

  return (<Router>
    <>
    <SearchAppBar />
    <Home />
    </>
    </Router>
  )
}

export default App
