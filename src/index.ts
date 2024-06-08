import { CurrentWeather } from "./intefaces";
import { apiKey } from "../config.json";

const getWeather = async (): Promise<CurrentWeather> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Erro ao retornar informações");
  }

  const data = await response.json();

  const summary: CurrentWeather = {
    lat: data.lat,
    lon: data.lon,
    current: {
      temp: data.current.temp, 
    },
  };

  return summary;
};


getWeather()
  .then((weatherSummary) => {
    console.log(weatherSummary);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
