import React, { Component } from "react";
import Input from "./input";

//table with image and multiple input
class TableTest extends Component {
  render() {
    return (
      <div className="table2">
        <p className="table_header">
          {this.props.main.desc}
          <img
            className="icon_image"
            src={this.props.main.imageSrc}
            alt=""
            title={this.props.main.imageDesc}
          />
        </p>
        <div className="wse_content">
          {this.props.main.test.map((input) => (
            <Input key={input.id} input={input} onInput={this.props.onChange} />
          ))}
        </div>
      </div>
    );
  }
}

export default TableTest;
