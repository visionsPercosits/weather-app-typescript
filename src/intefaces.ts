export interface CurrentWeather {
    coord: {
        lon: number,
        lat: number,
    }
    weather: {
        0: {
            main: string,
        }
    }
    main: {
        temp: number,
        feels_like?: number,
    }
}