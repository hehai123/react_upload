import React, { Component } from "react";
import Input from "./input";

class Table3 extends Component {
  render() {
    return (
      <div className="table2">
        <p className="table_header">{this.props.input.desc}</p>
        <div className="wse_content">
          <div className="toggle-button-cover">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input type="checkbox" className="checkbox-button" />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
          {this.props.input.field.map((input) => (
            <Input
              key={input.id}
              input={input}
              onChange={this.props.onChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Table3;
