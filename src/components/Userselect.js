import React from 'react';
import { Link } from 'react-router-dom';
import cafeasyImage from '../images/CAFEASY-LOGO-removebg.png';
import foodBackgroundImage from '../images/food-background.jpeg';

const Userselect = () => {
  const appStyle = {
    backgroundImage: `url(${foodBackgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="App" style={appStyle}>
      <div className='text-center'>
        <img src={cafeasyImage} alt="Cafeasy" className="mx-auto mt-10 mb-4 max-w-lg h-auto" />
      </div>
      <div className='m-auto mt-2 flex flex-col space-y-6'>
        <Link to="/customerlogin">
          <button className='custom-body-font text-2xl mx-2 bg-transparent hover:bg-teal-200 text-teal-600 py-3 px-10 rounded-md border-2 border-teal-400'> CUSTOMER </button>
        </Link>
        <Link to="/stafflogin">
          <button className='custom-body-font text-2xl mx-2 bg-transparent hover:bg-teal-200 text-teal-600 py-3 px-10 rounded-md border-2 border-teal-400'> CAFE STAFF </button>
        </Link>
      </div>
    </div>
  );
};

export default Userselect;
