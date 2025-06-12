const API_KEY = 'API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeatherByZip(zip) {
  const response = await fetch(`${BASE_URL}?zip=${zip}&units=metric&appid=${API_KEY}`);
  if (!response.ok) throw new Error('Failed to fetch weather by ZIP');
  return response.json();
}

export async function getWeatherByCity(city) {
  const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) throw new Error('Failed to fetch weather by City');
  return response.json();
}
