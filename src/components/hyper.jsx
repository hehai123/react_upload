import React, { Component } from "react";

class Hyper extends Component {
  render() {
    return (
      <div className="input_table">
        <label>{this.props.hyper.desc}</label>
        <input
          type="number"
          className="input"
          min={0}
          step={this.props.hyper.step}
          max={this.props.hyper.max}
          defaultValue={this.props.hyper.value}
          onInput={(e) =>
            this.props.onInput(parseFloat(e.target.value), this.props.hyper)
          }
        />
      </div>
    );
  }
}

export default Hyper;
