import React, { Component } from "react";

class EnemyDef extends Component {
  render() {
    return (
      <div className="table2">
        <p className="table_header">{this.props.input.desc}</p>
        <div className="input_table">
          <label>{this.props.input.desc1}</label>
          <input
            className="input"
            type="Number"
            min={0}
            max={this.props.input.max}
            defaultValue={this.props.input.value}
            onChange={(e) => this.props.onChange(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default EnemyDef;
