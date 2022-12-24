import { Dimensions } from "react-native";
const width = (number: number) => {
  let fullWidth = Dimensions.get("window").width;
  if (number >= 100) return fullWidth;
  else if (number <= 0) return 0;
  else return fullWidth * (number / 100);
};
const height = (number: number) => {
  let fullHeight = Dimensions.get("window").height;
  if (number >= 100) return fullHeight;
  else if (number <= 0) return 0;
  else return fullHeight * (number / 100);
};
export default { height, width };
