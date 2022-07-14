import React, { Component } from "react";
import Input from "./input";

class Table2 extends Component {
  render() {
    return (
      <div className="table2">
        <p className="table_header">{this.props.input.desc}</p>
        <div className="wse_content">
          {this.props.input.field.map((input) => (
            <Input
              key={input.id}
              input={input}
              onInput={(value, option) =>
                this.props.onChange(value, option, this.props.input)
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Table2;
