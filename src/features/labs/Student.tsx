import * as React from 'react';
import { Student } from '@/models';
// import { Student } from '../../models';


export interface StudentCardProps {
    student: Student;
}

//Props are READ ONLY
// DO NOT MUTATE Props
// Props are immutable.

export function StudentCard ({student}: StudentCardProps) {
  let {name, isHero} = student 
  
  function handleClick() {
    student.name ='Bob'
    console.log(student) 
    // - Not trigger re-render.
    // - Inconsistent data: Du lieu khong nhat quan

  }

  return (
    <div onClick={handleClick}>
        Student: {name} {isHero  ? 'hero': 'no-hero'}
    </div>
  );
}
