import React, { Component } from "react";

//for multiple options
class Selection extends Component {
  render() {
    return (
      <div className="selection-row-wse">
        <label className="selection_label">{this.props.option.lineDesc}</label>
        <select
          className="selection_option"
          onChange={(e) =>
            this.props.onSelect(e.target.value, this.props.option)
          }
        >
          {this.props.option.value.map((eq_type) => (
            <option key={eq_type}>{eq_type}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Selection;
