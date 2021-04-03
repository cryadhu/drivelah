import { StyleSheet } from "react-native";
import { bluishGreen } from "../../assets/colors";

export default styles = (param) =>
  StyleSheet.create({
    divider: {
      backgroundColor: bluishGreen,
      height: 4,
      borderRadius: 4,
      marginHorizontal: 5,
      width: param?.width,
      position: "absolute",
      bottom: -2,
    },
  });
