import React from 'react';
import PropTypes from 'prop-types';

export class LinkItem extends React.Component {

  render() {
    return (
      <div className="item">
        <div className="itemImage">
          <img src={this.props.qrCode} alt="QR code for website"></img>
        </div>
        <div className="itemURLS">
          <span>Short: { this.props.tinyURL }</span>
          <br/>
          <span>Long: { this.props.longURL }</span>
        </div>
        <div className="itemButtons">
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
