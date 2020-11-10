import React, { Component } from 'react';

class Edit extends Component {
  render() {
    return (
      <div>Edit {this.props.match.params.id}</div>
    )
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }
}

export default Edit;
