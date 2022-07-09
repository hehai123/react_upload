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
          onClick={() => this.props.onCheckbox(this.props.skills)}
        />
      </div>
    );
  }
}

export default Counter;
