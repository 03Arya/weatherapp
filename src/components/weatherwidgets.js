"use client"
import Image from "next/image";
import icon from "@/images/big-icons/icon1.png";
import bg from "@/images/Rectangle1.png";

export default function WeatherWidget() {
    return (
        <section style={{ backgroundImage: `url(${bg.src})` }} className="weatherWidgetContainer">

            <div className="weatherBox">
                <div className="weatherWidgetHeaderBox">
                    <h2 className="weatherWidgetDegrees">19°</h2>
                    <Image className="weatherWidgetImage" src={icon} alt="" />
                </div>

                <div className="weatherDiv1">
                    <p className="weatherHighest">H:24°</p> <p className="weatherLowest">L:18°</p>
                </div>

                <div className="weatherDiv2">
                    <p className="weatherLocation">Montreal, Canada</p>
                    <p className="weatherType">Mid Rain</p>
                </div>
            </div>
        </section>
    )
}