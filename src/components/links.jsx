import React from 'react';
import LinkItem from './linkitem';
import PropTypes from 'prop-types';

class Links extends React.Component {
  render() {
    console.log('links', this.props);
    let renderedContent = this.props.links.map((link, index) => (
      //if index doesn't work revert to ID from DB
      <LinkItem key={index} {...link} delLink={this.props.delLink} />
    ));
    return (
      <section>
      {renderedContent}
      </section>
    )
  }
}

// PropTypes
Links.propTypes = {
  links: PropTypes.array.isRequired,
  delLink: PropTypes.func.isRequired,
}

export default Links;
// const Links = (props) => {
//   return (
//     <section>
//       <div>

//       </div>
//     </section>
//   );
// }

// export default Links;