import "./CurrentWeather.css";

export const CurrentWeather = ({ data }) => {
  const timeZone = data !== null ? data.weatherResponse.timezone : "_";
  const max = data !== null ? data.weatherResponse.daily.temperature_2m_max[0] : "_";
  const min = data !== null ? data.weatherResponse.daily.temperature_2m_min[0] : "_";
  const sunRise = data !== null ? data.weatherResponse.daily.sunrise[0] : "_";
  const sunSet = data !== null ? data.weatherResponse.daily.sunset[0] : "_";
  const precipitation = data !== null ? data.weatherResponse.daily.precipitation_sum[0] : "_";

  return (
    <>
      <div className="box">
        <p className="city">TimeZone - {timeZone}</p>
        <p className="weather-description">MAX: {max}&deg;</p>
        <p className="temp">MIN: {min}&deg;</p>
        <p className="sunrise">Sunrise: {sunRise}</p>
        <p className="sunrise">Sunset: {sunSet}</p>
        <p className="precipitation">Precipitation: {precipitation}mm</p>
      </div>
    </>
  );
};
