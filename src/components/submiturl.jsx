import React from 'react';
import superagent from 'superagent';


class SubmitURL extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      qrCode: '',
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
    if (!/^http(s)?:\/\//.test(this.state.url) || this.state.url.includes('cjs.site') || this.state.url.includes('cj2s.site')) {
      alert('Please enter a valid URL\n\nShould contain http:// or https://\n\nShould not contain cj2.site or cj2s.site');
    } else {
      let data = await superagent.get(`${this.props.backendURL}?data=${this.state.url}`);
      let tinyURL = data.body.short_url;
      let qrCode = data.body.qr_code;
      // Update App state
      this.props.updateTinyURL(`https://cj2.site/${tinyURL}`, this.state.url, qrCode);
    }
  };

  render(){
    return (
      <div>
        <section>
          <form onSubmit={this.handleSubmit}>
            <h2>Paste your link you want to shorten below!</h2>
            <input className='longUrlInput' onChange={this.handleURL} />
            <button>Submit</button>
          </form>
        </section>
      </div>

    );
  }
}

export default SubmitURL;
