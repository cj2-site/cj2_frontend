import React from 'react';
import SubmitURL from './submiturl.jsx';
import OutputURL from './outputurl.jsx';

const Home = (props) => {
  return (
    <section>
      <div>
      {props.tinyURL === '' ?
        <SubmitURL {...props} /> :
        <OutputURL {...props} /> }
      </div>
    </section>
  );
}

export default Home;
