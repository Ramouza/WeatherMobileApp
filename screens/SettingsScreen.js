import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HamburgerMenu from '../components/HamburgerMenu';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);

  const settings = [
    { icon: "globe", label: "Language", onPress: () => {} },
    {
      icon: "help-circle",
      label: "About",
      onPress: () => navigation.navigate("Info", { initialTab: "about" }),
    },
    {
      icon: "file-text",
      label: "Terms & Conditions",
      onPress: () => navigation.navigate("Info", { initialTab: "terms" }),
    },
    { icon: "lock", label: "Privacy Policy", onPress: () => {} },
    { icon: "star", label: "Rate This App", onPress: () => {} },
    { icon: "share-2", label: "Share This App", onPress: () => {} },
  ];

  return (
    <View style={styles.container}>
      <HamburgerMenu/>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollArea}>
        <Text style={styles.sectionLabel}>General Settings</Text>

        <View style={styles.item}>
          <View style={styles.left}>
            <FontAwesome
              name="gear"
              size={20}
              color="#333"
              style={styles.icon}
            />
            <View>
              <Text style={styles.label}>Mode</Text>
              <Text style={styles.subLabel}>Dark & Light</Text>
            </View>
          </View>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        {settings.map((setting, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={setting.onPress}
          >
            <View style={styles.left}>
              <Feather
                name={setting.icon}
                size={20}
                color="#333"
                style={styles.icon}
              />
              <Text style={styles.label}>{setting.label}</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cde3dc",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2e2e2e",
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginVertical: 12,
  },
  scrollArea: {
    paddingBottom: 30,
  },
  item: {
    backgroundColor: "#e7f4ec",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 14,
  },
  label: {
    fontSize: 15,
    color: "#333",
  },
  subLabel: {
    fontSize: 12,
    color: "#888",
  },
});
