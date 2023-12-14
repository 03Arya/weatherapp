"use client"
import Image from "next/image"

export default function Pile({ time, image, humidity, temp }) {
    return (
        <div className="pileBorderBox">
            <section className="pileContentContainer">
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