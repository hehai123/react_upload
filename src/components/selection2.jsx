import React, { Component } from "react";

// for single option only
class Selection2 extends Component {
  render() {
    return (
      <div className="selection_row">
        <label className="selection_label">{this.props.option.lineDesc}</label>
        <select
          className="selection_option"
          onChange={(e) => this.props.onChange(e.target.value)}
        >
          {this.props.option.value.map((eq_type) => (
            <option key={eq_type}>{eq_type}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Selection2;
