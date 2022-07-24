import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Card from "../Components/Card";
import data from "../data.json";

const main =
  "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c";
export default function MainPage() {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(data);
  }, []);
  let tip = state.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림";
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>보윤이의 꿀팁</Text>
      <Text style={styles.weather}>
        오늘의 날씨: {todayWeather + "도 " + todayCondition}
      </Text>
      <Image style={styles.mainImage} source={{ uri: main }} />
      <ScrollView
        style={styles.middleContainer}
        horizontal
        indicatorStyle={"white"}
      >
        <TouchableOpacity style={styles.middleButton01}>
          <Text style={styles.middleButtonText}>생활</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}>
          <Text style={styles.middleButtonText}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03}>
          <Text style={styles.middleButtonText}>반려견</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04}>
          <Text style={styles.middleButtonText}>꿀팁 찜</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        {tip.map((content, i) => {
          return <Card content={content} key={i} />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 60,
    marginLeft: 20,
  },
  weather: {
    alignSelf: "flex-end",
    paddingRight: 20,
  },
  mainImage: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  middleContainer: {
    marginTop: 20,
    marginLeft: 10,
    height: 60,
  },
  middleButton01: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fdc453",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7,
  },
  middleButton02: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fe8d6f",
    borderRadius: 15,
    margin: 7,
  },
  middleButton03: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#9adbc5",
    borderRadius: 15,
    margin: 7,
  },
  middleButton04: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#f886a8",
    borderRadius: 15,
    margin: 7,
  },
  middleButtonText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  cardContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
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
});
