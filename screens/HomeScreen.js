import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CitySection from "../components/CitySection";
import HamburgerMenu from "../components/HamburgerMenu";
import Header from "../components/Header";
import ZipSection from "../components/ZipSection";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <HamburgerMenu/>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <ZipSection />
        <CitySection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#cde3dc",
  },
  container: {
    flexGrow: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
