import React, { Component } from 'react';

export default class Titulo extends Component {
  constructor() {
    super();
  }
  render() {
    return <p>{this.props.mensaje}</p>;
  }
}