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
          value={this.props.input.value}
          onChange={(e) =>
            this.props.onChange(e.target.value, this.props.input)
          }
        />
      </div>
    );
  }
}

export default Input;
