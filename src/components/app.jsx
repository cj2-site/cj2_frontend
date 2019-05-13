import React from 'react';
import Header from './header.jsx';
import SubmitURL from './submiturl.jsx';
import OutputURL from './outputurl.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tinyURL: '',
      backendURL: 'https://cj2.site',
    };
  }

  updateTinyURL = (tinyURL) => {
    this.setState({tinyURL});
  }

  render() {
    return (
      <>
        <Header />
        <main>
          {this.state.tinyURL === '' ?
          <SubmitURL updateTinyURL={this.updateTinyURL} /> :
          <OutputURL tinyURL={this.state.tinyURL}/> }
        </main>
      </>
    );
  }
}

export default App;
