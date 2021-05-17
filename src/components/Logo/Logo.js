import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Logo = ({ title }) => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="Title-SlideIn"
      unmountOnExit
    >
      <h1 className="Title">{title}</h1>
    </CSSTransition>
  );
};

export default Logo;
