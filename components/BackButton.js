import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BackButton = ({ targetScreen = "Home" }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(targetScreen);
  };
  return (
    <View>
      <LinearGradient colors={["#b8e6c8", "#d7f1e3"]} style={styles.backButton}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginTop: 30,
    backgroundColor: '#b8e6c8',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 40,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  backButtonText: {
    color: '#2e4f3f',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BackButton;
