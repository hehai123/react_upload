import React, { Component } from "react";

class Equipment extends Component {
  render() {
    return (
      <div className="counter_table">
        <img
          className="icon_image"
          src={this.props.eq.imageSrc}
          alt=""
          title={this.props.eq.imageDesc}
        />
        <label className="text">{this.props.eq.desc}</label>
        <select
          className="select_option"
          onChange={(e) => this.props.onSelect(e.target.value, this.props.eq)}
        >
          {this.props.eq.value.map((eq_type) => (
            <option key={eq_type}>{eq_type}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Equipment;
