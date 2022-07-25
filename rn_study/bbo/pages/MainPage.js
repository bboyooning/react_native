import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const main =
  "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";
import data from "../data.json";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { StatusBar } from "expo-status-bar";

export default function MainPage() {
  const [state, setState] = useState([]);
  const [categoryState, setCategoryState] = useState([]);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setState(data.tip);
      setCategoryState(data.tip);
      setReady(false);
    }, 1000);
  }, []);

  const category = (cate) => {
    if (cate == "전체보기") {
      setCategoryState(state);
    } else {
      setCategoryState(
        state.filter((data) => {
          return data.category == cate;
        })
      );
    }
  };

  let todayWeather = 10 + 17;
  let todayCondition = "흐림";
  return ready ? (
    <Loading />
  ) : (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>보윤이의 꿀팁</Text>
      <Text style={styles.weather}>
        오늘의 날씨: {todayWeather + "°C " + todayCondition}
      </Text>
      <Image style={styles.mainImage} source={{ uri: main }} />
      <ScrollView
        style={styles.middleContainer}
        horizontal
        indicatorStyle={"white"}
      >
        <TouchableOpacity
          style={styles.middleButtonAll}
          onPress={() => {
            category("전체보기");
          }}
        >
          <Text style={styles.middleButtonTextAll}>전체보기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton01}
          onPress={() => {
            category("생활");
          }}
        >
          <Text style={styles.middleButtonText}>생활</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton02}
          onPress={() => {
            category("재테크");
          }}
        >
          <Text style={styles.middleButtonText}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton03}
          onPress={() => {
            category("반려견");
          }}
        >
          <Text style={styles.middleButtonText}>반려견</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton04}
          onPress={() => {
            category("꿀팁 찜");
          }}
        >
          <Text style={styles.middleButtonText}>꿀팁 찜</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        {categoryState.map((content, i) => {
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
  middleButtonAll: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#20b2aa",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7,
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
  middleButtonTextAll: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
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
});
