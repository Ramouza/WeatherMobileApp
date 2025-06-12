import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getWeatherByZip } from "../services/weatherService";

export default function ZipSection() {
  const [zip, setZip] = useState("");
  const navigation = useNavigation();

  const handleZipSearch = async () => {
    try {
      const data = await getWeatherByZip(zip);
      navigation.navigate('Forecast', { weatherData: data });
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.section}>
      <TextInput
        placeholder="Write your zip code"
        value={zip}
        onChangeText={setZip}
        style={styles.input}
        keyboardType="numeric"
      />
      <TouchableOpacity
        title="Check Using your ZIP code"
        onPress={handleZipSearch}
        style={styles.buttonstyles}
      >
        <Text>Check Using your ZIP code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 30, width: "100%" },
  input: {
    backgroundColor: "#f3f3f3",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  buttonstyles: {
    backgroundColor: "#549876",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    textAlign: "center",
  },
});
