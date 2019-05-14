import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header.jsx';
import Home from './home.jsx';
import Faq from './faq.jsx';
import About from './about.jsx';
import Links from './links.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tinyURL: '',
      backendURL: 'https://cj2.herokuapp.com/long-url',
      links: []
    };
  }

  componentDidMount() {
    // Load from local storage
    const tempLinks = JSON.parse(localStorage.getItem("links"));
    tempLinks ? this.setState({links: tempLinks}) : this.setState({links: []});
  }

  updateLocalStorage = () => {
    // Update local storage
    localStorage.setItem("links", JSON.stringify(this.state.links));
  }

  // Not sure if this works
  delLink = (tinyURL) => {
    const links = this.state.links.filter((element) => element.tinyURL !== tinyURL);
    console.log(links);
    this.setState({links});
    this.updateLocalStorage();
  }

  updateTinyURL = (tinyURL, longURL) => {
    // Set state and call function to update storage.
    this.setState({ tinyURL });
    if(tinyURL !== '' && tinyURL){
      this.setState(previousState => ({
        links: [...previousState.links, {tinyURL: tinyURL, longURL: longURL}]
      }));
      this.updateLocalStorage();
    }
  }

  clearTinyURL = () => {
    this.setState({ tinyURL: '' });
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <main>
            <Route exact path="/"
              render={(routeProps) => (
                <Home {...routeProps} {...this.state}
                updateTinyURL={this.updateTinyURL}
                clearTinyURL={this.clearTinyURL} />
              )} />
            <Route path="/faq/" component={Faq} />
            <Route path="/about/" component={About} />
            <Route path="/links"
              render={(routeProps) => (
                <Links {...routeProps} {...this.state}
                delLink={this.delLink}/> 
              )}  />
          </main>
        </Router>
      </>
    );
  }
}

export default App;
