import React from 'react';
import PropTypes from 'prop-types';

export class LinkItem extends React.Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
    }
  }

  render() {
    console.log('linkitems', this.props);
    //const { tinyURL, longURL } = this.props.link;
    return (
      <div style={this.getStyle()}>
        <p>
        <span>Short: { this.props.tinyURL }  Long: { this.props.longURL }</span>
          <button onClick={this.props.delLink.bind(this, this.props.key)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

// PropTypes
LinkItem.propTypes = {
  link: PropTypes.object.isRequired,
  delLink: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default LinkItem
