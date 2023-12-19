"use client"
import React, { useEffect, useState } from "react"
import WeatherWidget from "@/components/weatherwidgets"
import Forecast from "@/components/forecast"
import Pile from "@/components/pile"
import Navigation from "@/components/navigation"
import axios from "axios"

import "@/style/main.scss"
import "@/style/weatherwidget.scss"
import "@/style/forecast.scss"
import "@/style/pile.scss"



export default function Home() {
  return (
    <main>
      <Forecast />


    </main>
  )
}

