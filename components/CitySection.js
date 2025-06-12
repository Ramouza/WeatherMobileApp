import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { getWeatherByCity } from '../services/weatherService';



export default function CitySection() {
  const [city, setCity] = useState('');
    const navigation = useNavigation();

  const handleCitySearch = async () => {
    try {
      const data = await getWeatherByCity(city);
        navigation.navigate('Forecast', { weatherData: data });
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.section}>
      <TextInput
        placeholder="Write your city name"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TouchableOpacity
        title="Check Using your ZIP code"
        onPress={handleCitySearch}
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
    alignContent: "center",
  },
});
