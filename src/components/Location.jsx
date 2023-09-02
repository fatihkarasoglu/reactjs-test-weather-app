export default function Location({ location }) {

    return(
        <div className="text-white text-xl flex justify-around items-center fixed bottom-0 w-full h-2/6 z-10">
            <h1> {location.main.temp.toFixed(0)} °C </h1>
            <h1> Feels like: {location.main.feels_like.toFixed(0)} °C </h1>
            <h1> {location.weather[0].main} </h1>
        </div>
    )
}