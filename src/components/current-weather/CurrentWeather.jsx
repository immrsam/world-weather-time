import "./CurrentWeather.css";

export const CurrentWeather = ({ data }) => {
  const timeZone = data !== null ? data.weatherResponse.timezone : "_";
  const max = data !== null ? data.weatherResponse.daily.temperature_2m_max[0] : "_";
  const min = data !== null ? data.weatherResponse.daily.temperature_2m_min[0] : "_";
  return (
    <>
      <div className="box">
        <p className="city">TimeZone - {timeZone}</p>
        <p className="weather-description">MAX: {max}&deg;</p>
        <p className="temp">MIN: {min}&deg;</p>
      </div>
    </>
  );
};
