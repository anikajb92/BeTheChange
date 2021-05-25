import React, { Component } from "react";

export default class Quote extends Component {

  render() {
    return (
      <div className="quote">
        <p>Oh you've got problems...</p>
        <p>{this.props.returnQuote.author} says</p>
        <p className="quote-text">"{this.props.returnQuote.inspiration}"</p>
      </div>
    );
  }
}
