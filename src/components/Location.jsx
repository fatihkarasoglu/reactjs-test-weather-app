export default function Location({ location }) {
    return(
        <div className="text-white text-xl flex justify-around items-center fixed bottom-0 w-full h-2/6 z-10">
            <h1 className="mb-4"> {location.main.temp} </h1>
            <h1 className="mb-4"> Feels like: {location.main.feels_like} </h1>
            <h1 className="mb-4"> {location.weather[0].main} </h1>
        </div>
    )
}