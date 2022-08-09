import React from 'react';
import '../styles/loader.css';

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="loaderContainer">
      <div className="loader"></div>
      <p className="loaderText">LADDAR</p>
    </div>
  );
};

export default Loader;
