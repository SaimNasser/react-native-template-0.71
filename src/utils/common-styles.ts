import { StyleSheet } from "react-native";
import { Theme } from "~utils";

export default StyleSheet.create({
    errorText:{
        ...Theme.fonts.light,
        fontSize: 14,
        color: Theme.colors.error
    }
})