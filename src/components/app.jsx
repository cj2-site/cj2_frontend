import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './header.jsx';
import Home from './home.jsx';
import Faq from './faq.jsx';
import About from './about.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tinyURL: '',
      backendURL: 'https://cj2.herokuapp.com/hello',
    };
  }

  updateTinyURL = (tinyURL) => {
    this.setState({tinyURL});
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <main>
            <Route exact path="/"
                   render={(routeProps) => (
                     <Home {...routeProps} {...this.state} updateTinyURL={this.updateTinyURL} />
                   )} />
            <Route path="/faq/" component={Faq} />
            <Route path="/about/" component={About} />
          </main>
        </Router>
      </>
    );
  }
}

export default App;
