import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header.jsx';
import Home from './home.jsx';
import Faq from './faq.jsx';
import About from './about.jsx';
import Links from './links.jsx';
import superagent from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tinyURL: '',
      qrCode: '',
      backendURL: 'https://cj2.herokuapp.com/long-url',
      links: []
    };
  }

  componentDidMount() {
    // Load from local storage
    const tempLinks = JSON.parse(localStorage.getItem("links"));
    tempLinks ? this.setState({links: tempLinks}) : this.setState({links: []});
  }

  // Update local storage on update of component
  componentDidUpdate() {
    this.updateLocalStorage();
  }

  updateLocalStorage = () => {
    // Update local storage
    localStorage.setItem("links", JSON.stringify(this.state.links));
  }

  // Delete function to remove links
  delLink = async (tinyURL) => {
    // If you delete the link you just made, remove it from the state
    if(tinyURL === this.state.tinyURL){
      this.clearTinyURL();
    }
    // Call superagent to invoke a update / delete & update the links
    await superagent.put(`${this.state.backendURL.slice(0,26)}${tinyURL.slice(-4)}`)
    .end((err,res) => this.setState({ links: [...this.state.links.filter(element => element.tinyURL !== tinyURL)] }))
  }

  updateTinyURL = (tinyURL, longURL, qrCode) => {
    // Set state and call function to update storage.
    this.setState({ tinyURL });
    this.setState({ qrCode });
    if(tinyURL !== '' && tinyURL && !(this.state.links.filter(element => element.tinyURL === tinyURL).length)){
      this.setState(previousState => ({
        links: [...previousState.links, {tinyURL: tinyURL, longURL: longURL, qrCode: qrCode}]
      }));
      this.updateLocalStorage();
    }
  }

  clearTinyURL = () => {
    this.setState({ tinyURL: '' });
    this.setState({ qrCode: '' });
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
