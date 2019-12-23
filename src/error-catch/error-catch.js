import React from 'react';
import './error-catch.css';
import icon from './fail-load.png';

const ErrorCatch = () => {
  return (
    <div className='error-div'>
      <h4 className="text-center my-error">Внимание!</h4>
      <p className="text-content my-error text-center"> Невозможно загрузить данные с сервера. Попробуйте повторить позже</p>
      <div className='d-flex justify-content-center'>
        <img className=' icon-error ' src={icon} alt='icon-item' />
      </div>
    </div>
  );
}

export default ErrorCatch;