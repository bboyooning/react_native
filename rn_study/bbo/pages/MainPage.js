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
  "https://bboyooning.github.io/static/cf31bb58d7d32cf68d769e4e00754e91/30053/boyoon.webp";
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
      title: "보윤이의 기술 블로그",
    });

    setTimeout(() => {
      firebase_db
        .ref("/blog")
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
    if (cate == "전체 보기") {
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
        <Text style={styles.aboutButtonText}>블로그 소개</Text>
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
            category("전체 보기");
          }}
        >
          <Text style={styles.middleButtonTextAll}>전체 보기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton01}
          onPress={() => {
            category("Javascript");
          }}
        >
          <Text style={styles.middleButtonText}>JavaScript</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton02}
          onPress={() => {
            category("React");
          }}
        >
          <Text style={styles.middleButtonText}>React</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton03}
          onPress={() => {
            category("React Native");
          }}
        >
          <Text style={styles.middleButtonText}>React Native</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton04}
          onPress={() => {
            navigation.navigate("LikedPage");
          }}
        >
          <Text style={styles.middleButtonText}>좋아요</Text>
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
    backgroundColor: "orange",
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
    backgroundColor: "#007ACC",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7,
  },
  middleButton01: {
    width: 120,
    height: 50,
    padding: 15,
    backgroundColor: "#F7DF1E",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7,
  },
  middleButton02: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#61DAFB",
    borderRadius: 15,
    margin: 7,
  },
  middleButton03: {
    width: 130,
    height: 50,
    padding: 15,
    backgroundColor: "#0088CC",
    borderRadius: 15,
    margin: 7,
  },
  middleButton04: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#E34F26",
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
