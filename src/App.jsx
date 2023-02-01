import { useState } from "react";
import "./App.css";
import { CurrentWeather } from "./components/current-weather/CurrentWeather";
import Search from "./components/search/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const weatherFetch = fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum&timezone=auto`
    );

    Promise.all([weatherFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      setCurrentWeather({ weatherResponse });
    });
  };
  if (currentWeather !== null) console.log(currentWeather.weatherResponse.timezone);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather data={currentWeather} />
    </div>
  );
}

export default App;
