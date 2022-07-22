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
} from "react-native";

export default function App() {
  const customAlert = () => {
    Alert.alert("TouchableOpacity 에도 onPress 속성 존재");
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </TouchableOpacity>
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
