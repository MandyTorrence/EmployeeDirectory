import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeTable from './components/EmployeeTable';
import "./styles/style.css";

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SearchBar />
      <EmployeeTable />
    </div>
  );
}

export default App;
