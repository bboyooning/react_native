import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from "react-native";

const main =
  "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";
import data from "../data.json";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import axios from "axios";
import { firebase_db } from "../firebaseConfig";
import {
  setTestDeviceIDAsync,
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from "expo-ads-admob";

export default function MainPage({ navigation, route }) {
  const [state, setState] = useState([]);
  const [categoryState, setCategoryState] = useState([]);
  const [weather, setWeather] = useState({
    temp: 0,
    condition: "",
  });
  const [ready, setReady] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: "보윤이의 꿀팁",
    });

    setTimeout(() => {
      firebase_db
        .ref("/tip")
        .once("value")
        .then((snapshot) => {
          let tip = snapshot.val();
          getLocation();
          setState(tip);
          setCategoryState(tip);
          setReady(false);
        });
    }, 1000);
  }, []);

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const locationData = await Location.getCurrentPositionAsync();
      const latitude = locationData["coords"]["latitude"];
      const longitude = locationData["coords"]["longitude"];
      const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const temp = result.data.main.temp;
      const condition = result.data.weather[0].main;
      setWeather({
        temp,
        condition,
      });
    } catch (error) {
      Alert.alert("위치를 찾을 수 없습니다.", "앱을 재실행 해주세요!");
    }
  };

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
  return ready ? (
    <Loading />
  ) : (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.weather}>
        오늘의 날씨: {weather.temp + "°C " + weather.condition}
      </Text>
      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => {
          navigation.navigate("AboutPage");
        }}
      >
        <Text style={styles.aboutButtonText}>소개 페이지</Text>
      </TouchableOpacity>
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
            navigation.navigate("LikedPage");
          }}
        >
          <Text style={styles.middleButtonText}>꿀팁 찜</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        {categoryState.map((content, i) => {
          return <Card content={content} key={i} navigation={navigation} />;
        })}
      </View>

      {Platform.OS === "ios" ? (
        <AdMobBanner
          bannerSize="fullBanner"
          servePersonalizedAds={true}
          adUnitID="ca-app-pub-4630826977196684/4054849711"
          style={styles.banner}
        />
      ) : (
        <AdMobBanner
          bannerSize="fullBanner"
          servePersonalizedAds={true}
          adUnitID="ca-app-pub-4630826977196684/3030592401"
          style={styles.banner}
        />
      )}
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
  aboutButton: {
    backgroundColor: "pink",
    width: 100,
    height: 40,
    borderRadius: 10,
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 10,
  },
  aboutButtonText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
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
  banner: {
    width: "100%",
    height: 100,
  },
});
