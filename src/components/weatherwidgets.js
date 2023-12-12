"use client"
import "@/style/page.scss";
// import icon from "../images/icon.png";

export default function WeatherWidget() {
    return (
        <section className="weatherWidgetContainer">
            <div className="weatherBox">
                <h2 className="weatherWidgetDegrees">19°</h2>
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