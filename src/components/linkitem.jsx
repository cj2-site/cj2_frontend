import React from 'react';
import PropTypes from 'prop-types';

const If = props => {
  return props.condition ? props.children : null;
}

export class LinkItem extends React.Component {

  state = {
    copied: false
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

  render() {
    return (
      <div className="item">
        <div className="itemImage">
          <img src={this.props.qrCode} alt="QR code for website"></img>
        </div>
        <div className="itemURLS">
          <span>Short: { this.props.tinyURL }</span><If condition={this.state.copied}><span style={{ color: '#32CD32' }}> Copied!</span></If>
          <br/>
          <span>Long: { this.props.longURL }</span>
        </div>
        <div className="itemButtons">
          <button className="linkCopy" onClick={this.copyToClipBoard}>Copy URL</button>
          <button onClick={this.props.delLink.bind(this, this.props.tinyURL)}>Delete</button>
        </div>
      </div>
    )
  }
}

// PropTypes
LinkItem.propTypes = {
  tinyURL: PropTypes.string.isRequired,
  longURL: PropTypes.string.isRequired,
  delLink: PropTypes.func.isRequired,
}



export default LinkItem
