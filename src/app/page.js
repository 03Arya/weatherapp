"use cleint"
import React from "react"
import WeatherWidget from "@/components/weatherwidgets"
import Forecast from "@/components/forecast"

import "@/style/main.scss"
import "@/style/weatherwidget.scss"
import "@/style/forecast.scss"

export default function Home() {
  return (
    <>
      <main>
        <Forecast />
        <WeatherWidget/>
      </main>
    </>
  )
}
