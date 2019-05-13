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
        <button onClick={this.copyToClipBoard}>Copy URL</button>
        <p>{this.props.tinyURL}</p>
        <button>Create another link</button>
      </>
    );
  }
}

export default OutputURL;