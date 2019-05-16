import React from 'react';
import LinkItem from './linkitem';
import PropTypes from 'prop-types';

class Links extends React.Component {
  render() {
    let renderedContent = this.props.links.map((link, index) => (
      <LinkItem key={index} {...link} delLink={this.props.delLink} />
    ));
    return (
      <div className='links'>
        <section>
          {renderedContent}
        </section>
      </div>
    )
  }
}

// PropTypes
Links.propTypes = {
  links: PropTypes.array.isRequired,
  delLink: PropTypes.func.isRequired,
}

export default Links;