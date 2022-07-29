import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Linking from "expo-linking";

export default function AboutPage({ navigation, route }) {
  const aboutImg =
    "https://images.velog.io/images/ewan/post/a698a820-6b06-43b8-929a-b2710995ffb1/react%20native.png";

  useEffect(() => {
    navigation.setOptions({
      title: "소개 페이지",
      headerStyle: {
        backgroundColor: "#1F266A",
        shadowColor: "#1F266A",
      },
      headerTintColor: "#fff",
    });
  }, []);

  const link = () => {
    Linking.openURL("https://github.com/bboyooning/react_native");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>안녕하세요, 김보윤 입니다.</Text>
      <View style={styles.middleContainer}>
        <Image
          style={styles.aboutImage}
          source={{ uri: aboutImg }}
          resizeMode={"cover"}
        />
        <Text style={styles.desc01}>리액트 네이티브로 만든 기술 블로그</Text>
        <Text style={styles.desc02}>Github 에서 확인해보세요!</Text>
        <TouchableOpacity style={styles.button} onPress={() => link()}>
          <Text style={styles.buttonText}>Github 가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F266E",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
    paddingLeft: 30,
    paddingTop: 100,
    paddingRight: 30,
  },
  middleContainer: {
    width: 300,
    height: 500,
    marginTop: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  aboutImage: {
    width: 150,
    height: 150,
    borderRadius: 30,
  },
  desc01: {
    marginTop: 20,
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
  desc02: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  button: {
    backgroundColor: "orange",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});
