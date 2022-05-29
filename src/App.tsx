import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import {Footer, Header, Widget } from './components/common';
import { MainLayout } from './components/Layout';
import { MyText } from './features/labs/MyText';
import {  StudentCard } from './features/labs/Student';
import { Student } from './models';
function App() {

  const [loading, setLoading] = useState(true)

  useEffect (() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, []
)

  const john: Student= {
    name: 'John',
    age: 3,
  }
  
  function handleStudentClick(student: Student){
    console.log("student click", student);
  }

  // if (loading ) return <p>loading...</p>

  const studentList = [
    { id: 1, name: 'easy'},
    { id: 5, name: 'frontend'},
  ]

  return (
    <div>
        <ul>
           {studentList.map((student) => (
             <Fragment key ={student.id}>
                <li >{student.name}</li>
                <li >{student.name}</li>
             </Fragment>
           ))}
        </ul>
        {/* {loading && <p>Loading...</p>}
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
        </div> */}
    </div>
  ); 
}

export default App;
