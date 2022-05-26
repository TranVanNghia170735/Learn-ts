import React from 'react';
import './App.css';
import {Footer, Header } from './components/common';
import {  StudentCard } from './features/labs/Student';
import { Student } from './models';
function App() {

  const john: Student= {
    name: 'John',
    age: 3,
  }
  return (
    <div>
        <Header></Header>
        <StudentCard student={john}/>
        <Footer></Footer> 
    </div>
  ); 
}

export default App;
