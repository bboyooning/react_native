import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Share,
  Platform,
} from "react-native";
import * as Linking from "expo-linking";
import { firebase_db } from "../firebaseConfig";
import * as Application from "expo-application";
const isIOS = Platform.OS === "ios";

export default function DetailPage({ navigation, route }) {
  const [tip, setTip] = useState({
    idx: 4,
    category: "Javascript",
    title: "Deep Dive 36. 디스트럭처링 할당",
    image:
      "https://bboyooning.github.io/static/ebf2585b8e228144d6853f854b8e9e39/30053/deep_dive.webp",
    desc: "디스트럭처링 할당",
    date: "2022.07.22",
  });

  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      headerStyle: {
        backgroundColor: "#000",
        shadowColor: "#000",
      },
      headerTintColor: "#fff",
    });

    const { idx } = route.params;
    firebase_db
      .ref("/blog/" + idx)
      .once("value")
      .then((snapshot) => {
        let tip = snapshot.val();
        setTip(tip);
      });
  }, []);

  const like = async () => {
    let userUniqueId;
    if (isIOS) {
      let iosId = await Application.getIosIdForVendorAsync();
      userUniqueId = iosId;
    } else {
      userUniqueId = await Application.androidId;
    }

    console.log(userUniqueId);
    firebase_db
      .ref("/like/" + userUniqueId + "/" + tip.idx)
      .set(tip, function (error) {
        console.log(error);
        Alert.alert("좋아요 탭에서 확인해보세요!");
      });
  };

  const share = () => {
    Share.share({
      message: `${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
    });
  };

  const link = () => {
    Linking.openURL("https://bboyooning.github.io/");
  };
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: tip.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{tip.title}</Text>
        <Text style={styles.desc}>{tip.desc}</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={() => like()}>
            <Text style={styles.buttonText}>좋아요</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => share()}>
            <Text style={styles.buttonText}>공유하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => link()}>
            <Text style={styles.buttonText}>외부 링크</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  image: {
    height: 400,
    margin: 10,
    marginTop: 40,
    borderRadius: 20,
  },
  textContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#eee",
  },
  desc: {
    marginTop: 10,
    color: "#eee",
    padding: 10,
    lineHeight: 20,
  },
  buttonGroup: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "deeppink",
    borderRadius: 7,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
