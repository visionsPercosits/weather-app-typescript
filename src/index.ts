import { CurrentWeather } from "./intefaces";
import {  apiKey } from '../config.json';

const getWater = (): Promise<CurrentWeather> => { // Passando a interface utilizada para as propriedades da API;
    return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${apiKey}`);
}