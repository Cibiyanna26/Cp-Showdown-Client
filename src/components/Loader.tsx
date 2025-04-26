import React from 'react';

const Loader: React.FC = () => {
  return (
    <>
    <button
      className="primary-button"
      aria-label="loading"
    >
      <i className="fa fa-circle-o-notch fa-spin"></i>
    </button>
    </>
  );
}

export default Loader;