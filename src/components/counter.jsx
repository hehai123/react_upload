import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="counter_table">
        <img
          className="icon_image"
          src={this.props.skills.imageSrc}
          alt=""
          title={this.props.skills.imageDesc}
        />
        <label className="label">{this.props.skills.desc} </label>
        <input
          className="checkbox"
          type="checkbox"
          checked={this.props.skills.checked}
          onChange={() => this.props.onChange(this.props.skills)}
        />
      </div>
    );
  }
}

export default Counter;
