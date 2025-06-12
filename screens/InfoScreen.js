import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";

import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function InfoScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState(
    route.params?.initialTab || "about"
  );

  const isAbout = activeTab === "about";
  const aboutuspar =
    "Welcome to Ramouza for Weather, your trusted companion for real-time weather updates and forecasts. Our mission is to provide accurate, accessible, and beautifully presented weather insights to help you plan your day with confidence. Whether you're traveling, working outdoors, or simply curious about the skies above, we strive to make weather information simple, reliable, and personal. Built with care and user experience in mind, Ramouza for Weather brings clarity to your everyday climate needs—because every forecast should feel like it was made just for you.";
  const termspara =
    "By using Ramouza for Weather, you agree to our terms of service. The app provides weather data for informational purposes only, and while we strive for accuracy, we cannot guarantee the completeness or real-time precision of all information. Users should not rely solely on Ramouza for Weather for critical safety decisions. The app may use device location data to enhance forecasts; this data is never stored or shared. Continued use of this application constitutes acceptance of these terms and any future updates. Always check official weather services during emergencies or travel planning.";

  return (
    <View style={styles.container}>
      <HamburgerMenu />

      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#2e8b57" />
      </TouchableOpacity>

      <Text style={styles.title}>
        {isAbout ? "About Us" : "Terms & Conditions"}
      </Text>

      <Image
        source={
          isAbout
            ? require("../assets/images/about.png")
            : require("../assets/images/terms.png")
        }
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setActiveTab("about")}>
          <Text style={[styles.tab, isAbout && styles.activeTab]}>
            About Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("terms")}>
          <Text style={[styles.tab, !isAbout && styles.activeTab]}>
            Terms & Conditions
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.textContainer}>
        <Text style={styles.sectionTitle}>
          {isAbout ? "About Us" : "Terms & Conditions"}
        </Text>
        <Text style={styles.paragraph}>
          {isAbout ? `${aboutuspar}` : `${termspara}`}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  back: { marginTop: 40 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 10,
  },
  image: {
    height: 350,
    width: "100%",
    alignSelf: "center",
    marginVertical: 10,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  tab: {
    fontSize: 16,
    paddingBottom: 8,
    color: "#888",
  },
  activeTab: {
    color: "#2e8b57",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#2e8b57",
  },
  textContainer: {
    paddingVertical: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: "#444",
    marginBottom: 12,
  },
});
