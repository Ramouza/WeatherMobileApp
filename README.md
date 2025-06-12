# 🌤️ Ramouza for Weather

**Ramouza for Weather** is a cross-platform mobile app built with **React Native + Expo**, designed to deliver real-time weather updates using the **OpenWeatherMap API**. The app supports searching by ZIP code or city name, viewing forecasts, and exploring additional info like sunrise/sunset, humidity, and wind speed — all in a clean, elegant UI.

---

## 🚀 Features

- 🔍 Search weather by **ZIP code** or **City**
- 📍 (Upcoming) Use **device GPS location**
- 📅 View current **date, time**, and **weather data**
- 🌅 Sunrise & 🌇 Sunset info with formatted times
- 🌙 **Dark Mode** toggle
- 🌐 Language selection via modal
- 📄 About & Terms content toggled from a single screen
- ⚙️ Settings screen with switchable options
- ☰ Hamburger menu for navigation

---

## 📸 Screenshots

> _(Add screenshots here when app is deployed on a device or emulator)_

---

## 🛠️ Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Expo Constants](https://docs.expo.dev/versions/latest/sdk/constants/)
- Optional: `expo-location`, `expo-linear-gradient`, etc.

---

## 🔧 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/ramouza-weather.git
cd ramouza-weather
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Add your OpenWeatherMap API key

Edit `app.config.js`:

```js
extra: {
  openWeatherApiKey: "YOUR_API_KEY_HERE"
}
```

Or create `.env` and configure it if using a different method.

### 4. Run the app

```bash
npx expo start
```

---

## 🔐 API Key Security Note

This app uses a public API key (OpenWeatherMap) which is not fully secured in a client app. For sensitive applications, consider using a backend or proxy server.

---

## 📦 Folder Structure

```
├── components/         # Reusable UI elements (Header, Buttons, etc.)
├── screens/            # App screens (Home, Forecast, Settings, Info)
├── services/           # API logic for OpenWeatherMap
├── context/            # Theme context for dark/light mode
├── assets/             # Images and icons
├── navigation/         # Stack navigation setup
├── app.config.js       # API keys and Expo config
└── App.js              # Entry point
```

---

## 📄 License

MIT License

---

## 👤 Author

Built by **Ramez**  
[GitHub](https://github.com/ramouza)

---