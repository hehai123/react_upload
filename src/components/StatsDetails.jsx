import React, { Component } from "react";
import StatsTable from "./StatsTable";

class StatsDetails extends Component {
  render() {
    return (
      <div className="stats_div">
        <section className="stats-details">
          <p className={this.props.displayCss}>Stats Details</p>
          <table className="stats-table">
            <tbody>
              {this.props.display.map((details) => (
                <StatsTable
                  key={details.id}
                  desc={details.desc}
                  value={this.props.value[details.name]}
                />
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default StatsDetails;
