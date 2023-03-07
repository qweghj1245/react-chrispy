import React from 'react';

type Props = {
  title: string;
  onClick: () => void;
}

const Button = (props: Props) => {
  return (
    <button onClick={props.onClick}>{props.title}</button>
  )
}

export default Button;
