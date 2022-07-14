import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="input-field">
        <label className="text">{this.props.input.desc}</label>
        <input
          className="input"
          type="Number"
          min={0}
          max={this.props.input.max}
          defaultValue={this.props.input.value}
          onInput={(e) => this.props.onInput(e.target.value, this.props.input)}
        />
      </div>
    );
  }
}

export default Input;
