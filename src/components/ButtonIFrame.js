import { useState, useEffect, useRef } from 'react';

const ButtonIFrame = ({ handleClick, frameUserState }) => {
  return (
    <button onClick={handleClick} className="button">
      {frameUserState ? 'unsubscribe' : 'subscribe'}
    </button>
  );
};

export default ButtonIFrame;
