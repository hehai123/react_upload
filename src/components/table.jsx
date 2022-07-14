import React, { Component } from "react";
import Selection from "./selection";

class Table extends Component {
  render() {
    return (
      <div className="wse_table">
        <p className="table_header">
          {this.props.table.desc}
          <img
            className="icon_image"
            src={this.props.table.imageSrc}
            alt=""
            title={this.props.table.imageDesc}
          />
        </p>
        <div className="wse_content">
          {this.props.table.test.map((option) => (
            <Selection
              key={option.id}
              option={option}
              onSelect={(e, input) =>
                this.props.onSelect(e, input, this.props.table)
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Table;
