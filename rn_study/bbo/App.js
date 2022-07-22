import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
        <Button
          style={styles.buttonStyle}
          title="버튼을 눌러주세요"
          color="#f194ff"
          onPress={() => {
            Alert.alert("팝업 알람입니다!!");
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
