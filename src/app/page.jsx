"use client"
import React, { useEffect, useState } from "react"
import WeatherWidget from "@/components/weatherwidgets"
import Forecast from "@/components/forecast"
import Pile from "@/components/pile"
import axios from "axios"

import "@/style/main.scss"
import "@/style/weatherwidget.scss"
import "@/style/forecast.scss"
import "@/style/pile.scss"

import CloudsImage from "@/images/weather-icons/cloudy.svg"
import ClearImage from "@/images/weather-icons/clear-day.svg"
import RainImage from "@/images/weather-icons/rainy-3.svg"
import DrizzleImage from "@/images/weather-icons/hail.svg"
import ThunderstormImage from "@/images/weather-icons/thunderstorms.svg"
import TornadoImage from "@/images/weather-icons/tornado.svg"

const weatherIcons = {
  Clouds: CloudsImage,
  Clear: ClearImage,
  Rain: RainImage,
  Drizzle: DrizzleImage,
  Thunderstorm: ThunderstormImage,
  Tornado: TornadoImage
}

function getWeatherIcon(weather) {
  return weatherIcons[weather];
}

export default function Home() {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const key = "fad690526e6d396356e0d2f5cbe639ad";

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`)
          .then(response => {
            setWeatherData(response.data);
            console.log(response.data)
          })
          .catch(error => {
            console.error(error);
          });
      }, (error) => {
        console.error(error);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);



  return (
    <main>
      <WeatherWidget />
      <WeatherWidget />
      <WeatherWidget />
      <WeatherWidget />
      <section className="pilesGridContainer">
        {weatherData && weatherData.list.slice(0, 8).map((forecast, index) => (
          <Pile
            key={index}
            time={new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: true })}
            image={getWeatherIcon(forecast.weather[0].main)}
            humidity={forecast.main.humidity + "%"}
            temp={Math.round(forecast.main.temp - 273.15) + "°"}
          />
        ))}
      </section>
    </main>
  )
}

