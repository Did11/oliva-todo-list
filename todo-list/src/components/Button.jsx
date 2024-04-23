import React from 'react';

const Button = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {label}
    </button>
  );
};

export default Button;
