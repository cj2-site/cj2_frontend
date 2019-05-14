import React from 'react';
import SubmitURL from './submiturl.jsx';
import OutputURL from './outputurl.jsx';

const Home = (props) => {
  return (
    <>
      {props.tinyURL === '' ?
        <SubmitURL {...props} /> :
        <OutputURL tinyURL={props.tinyURL}/> }
    </>
  );
}

export default Home;
