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
  // 화살표 함수 형식으로 함수 정의하고, JSX 문법 안에서 사용하기
  const customAlert = () => {
    Alert.alert("JSX 밖에서 함수 구현 가능!");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
        <Button
          style={styles.buttonStyle}
          title="버튼을 눌러주세요"
          color="#f194ff"
          onPress={customAlert}
        />
        <Button
          style={styles.buttonStyle}
          title="버튼을 눌러주세요"
          color="#ff0000"
          onPress={() => {
            customAlert();
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
