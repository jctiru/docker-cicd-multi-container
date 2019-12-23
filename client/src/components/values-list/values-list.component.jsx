import React from "react";

import { Value } from "../value/value.component";

export const ValueList = props => {
  const values = [];

  for (let key in props.values) {
    values.push(
      <Value key={key} value={{ key: key, value: props.values[key] }} />
    );
  }

  return <div>{values}</div>;
};
