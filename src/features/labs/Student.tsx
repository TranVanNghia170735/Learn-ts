import * as React from 'react';
import { Student } from '@/models';
// import { Student } from '../../models';

export interface StudentCardProps {
    student: Student
    onClick?: (student: Student) => void
}

export function StudentCard ({student, onClick}: StudentCardProps) {
  let {name, isHero} = student
  
  return (
    <div onClick={() => onClick?.(student)}>
        Student: {name} {isHero  ? 'hero': 'no-hero'}
    </div>
  );
}
