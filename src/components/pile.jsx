"use client"
import Image from "next/image"

export default function Pile({className, time, image, humidity, temp, day }) {
    return (
        <div className={`pileBorderBox ${className}`}>
            <section className="pileContentContainer">
            {day && <p>{day}</p>}
                <p className="pileTime">{time}</p>
                <div>
                <Image className="pileImage" src={image} alt="" />
                </div>
                <p className="pileHumidity">{humidity}</p>
                <p className="pileTemp">{temp}</p>
            </section>
        </div>
    )
}