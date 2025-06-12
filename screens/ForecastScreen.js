import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import HamburgerMenu from "../components/HamburgerMenu";
import { formatUnixTime } from "../services/utils";

export default function ForecastScreen() {
  const route = useRoute();
  const { weatherData } = route.params;
  const sunrise = formatUnixTime(weatherData.sys.sunrise);
  const sunset = formatUnixTime(weatherData.sys.sunset);

   const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const date = now.toLocaleDateString([], {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <View style={styles.container}>
      <HamburgerMenu />
      <Text style={styles.dateText}>{`${date} - ${time}`}</Text>
      <Text style={styles.cityText}>{weatherData.name}</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>Temp: {weatherData.main.temp}°C</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Wind: {weatherData.wind.speed} km/h</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Clouds: {weatherData.clouds.all}%</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Humidity: {weatherData.main.humidity}%
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>🌅 Sunrise: {sunrise}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>🌇 Sunset: {sunset}</Text>
      </View>
      <BackButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cde3dc",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  dateText: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 8,
    color: "#2d2d2d",
  },
  cityText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1b4d3e",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#80c2a8",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 8,
    width: "100%",
    alignItems: "center",
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
