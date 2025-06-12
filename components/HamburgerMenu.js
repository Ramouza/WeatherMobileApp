import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HamburgerMenu = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const handleNavigate = (screen) => {
    setVisible(false);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.icon}>
        <Ionicons name="menu" size={32} color="#333" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuBtn}
              onPress={() => handleNavigate("Settings")}
            >
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuBtn}
              onPress={() => handleNavigate("Info")}
            >
              <Text style={styles.menuText}>Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 999,
  },
  icon: {
    padding: 6,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Dim background
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    backgroundColor: "#bfe6d0",
    borderRadius: 20,
    padding: 20,
    width: "70%",
  },
  menuBtn: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  menuText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
});

export default HamburgerMenu;
