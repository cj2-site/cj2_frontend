import React from 'react';
import superagent from 'superagent';


class SubmitURL extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      qrCode: '',
      errmsg: ''
    };
  }

  handleURL = e => {
    let url= e.target.value;
    this.setState({ url });
  };

  handleSubmit = e => {
    let errmsg;
    e.preventDefault();
    // API call
    /* UNCOMMENT THIS WHEN BACKEND IS DONE AND STUFF */
    if (!/^http(s)?:\/\//.test(this.state.url) || this.state.url.includes('cj2.site') || this.state.url.includes('cj2s.site')) {
      errmsg = 'Please enter a valid URL. Should contain http:// or https://. Should not contain cj2.site or cj2s.site';
      this.setState({ errmsg });
    } else {
      superagent.get(`${this.props.backendURL}?data=${this.state.url}`)
        .then(res => {
          errmsg = '';
          this.setState({ errmsg });
          let tinyURL = res.body.short_url;
          let qrCode = res.body.qr_code;
          // Update App state
          this.props.updateTinyURL(`https://cj2.site/${tinyURL}`, this.state.url, qrCode);
        })
        .catch(err => {
          errmsg = err.response.text;
          this.setState({ errmsg })
        });
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
          <h2>{this.state.errmsg}</h2>
        </section>
      </div>

    );
  }
}

export default SubmitURL;
