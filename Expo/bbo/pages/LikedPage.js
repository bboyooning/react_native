import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import LikedCard from "../components/LikedCard";
import * as Application from "expo-application";
const isIOS = Platform.OS === "ios";
import { firebase_db } from "../firebaseConfig";

export default function LikedPage({ navigation, route }) {
  const [tip, setTip] = useState([]);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: "좋아요",
    });
    getLiked();
  }, []);

  const getLiked = async () => {
    let userUniqueId;
    if (isIOS) {
      let iosId = await Application.getIosIdForVendorAsync();
      userUniqueId = iosId;
    } else {
      userUniqueId = await Application.androidId;
    }

    console.log(userUniqueId);
    firebase_db
      .ref("/like/" + userUniqueId)
      .once("value")
      .then((snapshot) => {
        let tip = snapshot.val();
        let tip_list = Object.values(tip);
        if (tip_list && tip_list.length > 0) {
          setTip(tip_list);
          setReady(false);
        }
      });
  };

  return (
    <ScrollView style={styles.container}>
      {tip.map((content, i) => {
        return (
          <LikedCard
            key={i}
            content={content}
            navigation={navigation}
            tip={tip}
            setTip={setTip}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
