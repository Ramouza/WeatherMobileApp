import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/images/sun_clouds.png')} style={styles.image} />
      <Text style={styles.title}>Weather App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { alignItems: 'center', marginBottom: 30 },
  image: { width: 250, height: 250, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50' },
});
