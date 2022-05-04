import React, { Component } from 'react'

export default class Boton extends Component {
  render() {
    return (
        <button  value="Change value" onClick={this.props.handleClick}>Change value </button>
    )
  }
}
