import React from 'react';
import SubmitURL from './submiturl.jsx';
import OutputURL from './outputurl.jsx';

const Home = (props) => {
  return (
    <div className='home'>
      <div >
      {props.tinyURL === '' ?
        <SubmitURL {...props} /> :
        <OutputURL {...props} /> }
      </div>
    </div>
  );
}

export default Home;
