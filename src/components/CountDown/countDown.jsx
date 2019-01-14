import React, { Component } from "react";
import Clock from "../Clock/clock";

class CountDown extends Component {
  state = {
    deadline: "31 January, 2019",
    status: "",
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  handleCountDown = () => {
    setInterval(() => {
      const deadlineDate = new Date(this.state.deadline).getTime();
      const now = new Date().getTime();
      const distance = deadlineDate - now;

      if (distance < 0) {
        this.setState({ status: "Expired" });
      }
      this.setState({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
  };

  render() {
    const { days, hours, minutes, seconds, status } = this.state;
    let countDown = "Expired";

    if (status === "") {
      countDown = (
        <div>
          <Clock
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            onCountDown={this.handleCountDown}
          />
        </div>
      );
    }
    return (
      <div className="countDown">
        <p>Under Construction</p>
        {countDown}
        <code>Full-stack software engineer</code>
      </div>
    );
  }
}

export default CountDown;