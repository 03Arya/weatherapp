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

import CloudsImage from "@/images/small-icons/icon1.png"
import RainImage from "@/images/small-icons/icon2.png"
import SunRain1 from "@/images/small-icons/icon3.png"
import SunRain2 from "@/images/small-icons/icon4.png"
import Tornado from "@/images/small-icons/icon5.png"

const weatherIcons = {
  Clouds: CloudsImage

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

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
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
        {weatherData && <Pile time={"now"} image={getWeatherIcon(weatherData.weather[0].main)} humidity={weatherData.main.humidity + "%"} temp={weatherData.main.temp + "°"} />}
        {weatherData && <Pile image={getWeatherIcon(weatherData.weather[0].main)} humidity={weatherData.main.humidity + "%"} temp={weatherData.main.temp + "°"} />}
        {weatherData && <Pile image={getWeatherIcon(weatherData.weather[0].main)} humidity={weatherData.main.humidity + "%"} temp={weatherData.main.temp + "°"} />}
        {weatherData && <Pile image={getWeatherIcon(weatherData.weather[0].main)} humidity={weatherData.main.humidity + "%"} temp={weatherData.main.temp + "°"} />}
        {weatherData && <Pile image={getWeatherIcon(weatherData.weather[0].main)} humidity={weatherData.main.humidity + "%"} temp={weatherData.main.temp + "°"} />}
        {weatherData && <Pile image={getWeatherIcon(weatherData.weather[0].main)} humidity={weatherData.main.humidity + "%"} temp={weatherData.main.temp + "°"} />}
        {weatherData && <Pile image={getWeatherIcon(weatherData.weather[0].main)} humidity={weatherData.main.humidity + "%"} temp={weatherData.main.temp + "°"} />}
        {weatherData && <Pile image={getWeatherIcon(weatherData.weather[0].main)} humidity={weatherData.main.humidity + "%"} temp={weatherData.main.temp + "°"} />}
      </section>
    </main>
  )
}

