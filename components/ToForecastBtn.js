import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const ToForecastBtn = () => {
  const navigation = useNavigation();

  return ( <View>
      <LinearGradient colors={["#b8e6c8", "#d7f1e3"]} style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("Forecast")}>
          <Text style={styles.text}>To Forecast</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#00ff00",
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

export default ToForecastBtn;
