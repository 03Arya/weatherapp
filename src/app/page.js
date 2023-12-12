"use cleint"
import React from "react"
import WeatherWidget from "@/components/weatherwidgets"
import "@/style/page.scss"

export default function Home() {
  return (
    <>
    <main>
      <WeatherWidget />
      <WeatherWidget />
      <WeatherWidget />
      <WeatherWidget />

      </main>
    </>
  )
}
