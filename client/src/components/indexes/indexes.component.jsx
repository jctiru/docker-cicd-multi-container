import React from "react";

export const Indexes = props => (
  <div>{props.seenIndexes.map(({number}) => number).join(", ")}</div>
);
