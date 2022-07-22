import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import favicon from "./assets/favicon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/77096364?v=4" }}
        resizeMode={"cover"}
        style={styles.imageStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    height: 100,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    margin: 50,
  },
  textStyle: {
    textAlign: "center",
  },
});
