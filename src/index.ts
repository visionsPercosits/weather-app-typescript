import { CurrentWeather } from './intefaces';
import { apiKey } from "../config.json";

const getWeather = async (): Promise<CurrentWeather> => {
  const url = 'https://open-weather13.p.rapidapi.com/city/london/EN';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Erro ao retornar informações');
  }

  const data = await response.json();

  const summary: CurrentWeather = {
    coord: {
      lon: data.coord.lon,
      lat: data.coord.lat
    },
    weather: {
      0: {
        main: data.weather[0].main
      }
    },
    main: {
      temp: data.main.temp,
      feels_like: data.main.feels_like
    }
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
