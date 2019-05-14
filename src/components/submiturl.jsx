import React from 'react';
import superagent from 'superagent';


class SubmitURL extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
    };
  }

  handleURL = e => {
    let url= e.target.value;
    this.setState({ url });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // API call
    /* UNCOMMENT THIS WHEN BACKEND IS DONE AND STUFF */
    let data = await superagent.get(`${this.props.backendURL}?data=${this.state.url}`);
    let tinyURL = data.body.short_url;
    // let tinyURL = 'sdfl.cj2.site';
    // Update App state
    this.props.updateTinyURL(`${this.props.backendURL}/${tinyURL}`);
  };

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleURL} />
      <button>Submit</button>
    </form>
    );
  }
}

export default SubmitURL;
