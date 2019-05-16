import React from 'react';


const If = props => {
  return props.condition ? props.children : null;
}

class OutputURL extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false
    }
  }

  copiedAnimation = () => {
    this.setState({ copied: true });
    this.timer = setTimeout(_ => {
      this.setState({copied: false});
    }, 2000);
  }

  copyToClipBoard = () => {
    const el = document.createElement('textarea');
    el.value = this.props.tinyURL;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.copiedAnimation();
  }

  render(){
    return (
      <div>
        <section className='output'>
        <div>
          <img src={this.props.qrCode} alt= 'QR Code'/>
          <h2>{this.props.tinyURL}<If condition={this.state.copied}><span style={{ color: '#32CD32' }}> Copied!</span></If></h2>
        </div>
        <div>
          <button onClick={this.copyToClipBoard}>Copy URL</button>
          <button onClick={this.props.clearTinyURL}>Create another link</button>
        </div>
        </section>
      </div>
    );
  }
}

export default OutputURL;
