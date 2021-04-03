import { StyleSheet } from "react-native";
import {
  windowBackground,
  textColor,
  bluishGreen,
  white,
} from "../../assets/colors";

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: windowBackground,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pickerTitle: {
    color: textColor,
    fontSize: 18,
    fontFamily: "Museo-900",
    lineHeight: 24,
    marginLeft: 20,
    marginVertical: 10,
  },
  save: {
    backgroundColor: bluishGreen,
    flex: 1,
    height: 48,
    marginHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 32,
  },
  saveText: {
    color: white,
    fontSize: 18,
    fontFamily: "Museo-500",
    lineHeight: 24,
  },
  timeContainer: {
    backgroundColor: windowBackground,
  },
});
