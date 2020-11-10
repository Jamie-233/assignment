import React, { Component } from 'react';

class Preview extends Component {
  render() {
    return (
      <div>Preview {this.props.match.params.id}</div>
    )
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }
}

export default Preview;
