import React, { Component } from "react";

class statsTable extends Component {
  render() {
    return (
      <>
        <tr className="tr">
          <th className="th">{this.props.desc}</th>
          <td className="td">{this.props.value}</td>
        </tr>
      </>
    );
  }
}

export default statsTable;
