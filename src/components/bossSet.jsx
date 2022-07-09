import React, { Component } from "react";

class BossSet extends Component {
  render() {
    return (
      <div className="counter_table">
        <img
          className="icon_image"
          src={this.props.set.imageSrc}
          alt=""
          title={this.props.set.imageDesc}
        />
        <label className="text">{this.props.set.desc}</label>
        <select
          className="select_option"
          onChange={(e) => this.props.onSelect(e.target.value, this.props.set)}
        >
          {this.props.set.value.map((set_number) => (
            <option key={set_number}>{set_number}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default BossSet;
