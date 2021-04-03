import React from "react";
import { TouchableOpacity } from "react-native";

const Clickable = (props) => {
  const { children, style = {}, ...rest } = props;
  return (
    <TouchableOpacity style={style} {...rest} activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  );
};
export default Clickable;
