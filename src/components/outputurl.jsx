import React from 'react';


class OutputURL extends React.Component {
  constructor(props) {
    super(props);
  }

  copyToClipBoard = () => {
    const el = document.createElement('textarea');
    el.value = this.props.tinyURL;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Copied the text: " + this.props.tinyURL);
  }

  render(){
    return (
      <>
        <img src={this.props.qrCode} />
        <h2>{this.props.tinyURL}</h2>
        <button onClick={this.copyToClipBoard}>Copy URL</button>
        <button onClick={this.props.clearTinyURL}>Create another link</button>
      </>
    );
  }
}

export default OutputURL;
