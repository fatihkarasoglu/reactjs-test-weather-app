import React from "react"

export default function Location({ location }) {
    return(
        <div className="">
            <div>
                <h1> {location.name} </h1>
                <h1>Sıcaklık: {location.main.temp} </h1>
                <h1>Hissedilen: {location.main.feels_like} </h1>
                <h1> {location.weather[0].main} </h1>
            </div>
        </div>
    )
}