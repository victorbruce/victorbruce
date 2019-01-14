import React from "react";

const Clock = ({ days, hours, minutes, seconds, onCountDown }) => {
  return (
    <div>
      {onCountDown()}
      <span>{days}d </span>
      <span>{hours}h </span>
      <span>{minutes}m </span>
      <span>{seconds}s</span>
    </div>
  );
};

export default Clock;
