import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import { firebase_db } from "../firebaseConfig";
const isIOS = Platform.OS === "ios";
import * as Application from "expo-application";

export default function LikedCard({ content, navigation, tip, setTip }) {
  const detail = () => {
    navigation.navigate("DetailPage", { idx: content.idx });
  };

  const remove = async (cidx) => {
    let userUniqueId;
    if (isIOS) {
      let iosId = await Application.getIosIdForVendorAsync();
      userUniqueId = iosId;
    } else {
      userUniqueId = await Application.androidId;
    }

    console.log(userUniqueId);
    firebase_db
      .ref("/like/" + userUniqueId + "/" + cidx)
      .remove()
      .then(function () {
        Alert.alert("좋아요 해제");
        let result = tip.filter((data, i) => {
          return data.idx !== cidx;
        });
        setTip(result);
      });
  };

  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri: content.image }} />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {content.title}
        </Text>
        <Text style={styles.cardDesc} numberOfLines={3}>
          {content.desc}
        </Text>
        <Text style={styles.cardDate}>{content.date}</Text>
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.button} onPress={() => detail()}>
            <Text style={styles.buttonText}>자세히 보기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => remove(content.idx)}
          >
            <Text style={styles.buttonText}>좋아요 해제</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  cardDesc: {
    fontSize: 15,
  },
  cardDate: {
    fontSize: 10,
    color: "#A6A6A6",
  },
  bottomButtons: {
    flexDirection: "row",
  },
  button: {
    display: "flex",
    justifyContent: "space-around",
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
    color: "deeppink",
    textAlign: "center",
  },
});
