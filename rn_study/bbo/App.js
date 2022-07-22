import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>안녕하세요, 보윤이에요!</Text>
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
    margin: 10,
  },
  textStyle: {
    textAlign: "center",
  },
});
