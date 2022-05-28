import * as React from 'react';

export interface MyTextProps {
    children?: React.ReactNode
}

export function MyText (props: MyTextProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}
