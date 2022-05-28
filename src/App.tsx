import React from 'react';
import './App.css';
import {Footer, Header, Widget } from './components/common';
import { MainLayout } from './components/Layout';
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
        <MainLayout>
          <StudentCard student={john} onClick={handleStudentClick}/>
        </MainLayout>

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

        <div>
          <div><Widget title="Earning Overview">Chart 1</Widget></div>
          <div><Widget title="Revenue Source">Chart 2</Widget></div>
          <div><Widget title="Earning">Chart 3</Widget></div>
          <div><Widget title="Overview1">Chart 4</Widget></div>
        </div>
    </div>
  ); 
}

export default App;
