export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const getWeatherUrl = (lat, lon) => {
  return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum&timezone=auto`;
};

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "97fe31f750msh78db3c7da2d0d3fp1926a7jsn473f0ce2a8de",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
