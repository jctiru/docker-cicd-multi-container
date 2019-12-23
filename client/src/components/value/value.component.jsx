import React from "react";

export const Value = props => (
  <div>
    <p>
      For index {props.value.key} I calculated {props.value.value}
    </p>
  </div>
);
