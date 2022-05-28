import React from 'react';
import './App.css';
import {Footer, Header } from './components/common';
import { MyText } from './features/labs/MyText';
import {  StudentCard } from './features/labs/Student';
import { Student } from './models';
function App() {

  const john: Student= {
    name: 'John',
    age: 3,
  }

  function handleStudentClick(student: Student){
    console.log("student click", student);
  }

  return (
    <div>
        <Header></Header>
        <StudentCard student={john} onClick={handleStudentClick}/>
        <Footer></Footer> 
        <MyText></MyText>
        <MyText>Easy Frontend</MyText>
        <MyText>{123}</MyText>
        <MyText>{false}</MyText>
        <MyText>{null}</MyText>
        <MyText>{undefined}</MyText>
        <MyText><span>easy</span></MyText>
        <MyText>
          <span>easy</span>
          <span>frontend</span>
        </MyText>
    </div>
  ); 
}

export default App;
