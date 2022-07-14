import React, { Component } from "react";
import Selection2 from "./selection2";

class TableMain extends Component {
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
          {this.props.main.test.map((option) => (
            <Selection2
              key={option.id}
              option={option}
              onChange={this.props.onChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TableMain;
