"use client"
import React, { useEffect, useState } from "react"
import WeatherWidget from "@/components/weatherwidgets"
import Forecast from "@/components/forecast"
import Pile from "@/components/pile"
import Navigation from "@/components/navigation"
import axios from "axios"
import Image from "next/image"


import "@/style/main.scss"
import "@/style/weatherwidget.scss"
import "@/style/forecast.scss"
import "@/style/pile.scss"
import House from "@/images/house.png"


export default function Home() {
  return (
    <main>
      <Image className="house" src={House} alt="" />
      <Forecast />
    </main>
  )
}

