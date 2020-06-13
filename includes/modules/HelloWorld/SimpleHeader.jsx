// External Dependencies
import React, { Component, Fragment } from 'react';

// Internal Dependencies
import './style.css';


class SimpleHeader extends Component {

  static slug = 'simp_simple_header';

  render() {
    return (
      <div className="simp-simple-header">
        {this.props.content()}
      </div>
    );
  }
}

export default SimpleHeader;