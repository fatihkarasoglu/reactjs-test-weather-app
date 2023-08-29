export default function Location({ location }) {
    return(
        <div>
      <div>
        <h1> {location.main.temp} </h1>
        <h1> {location.name} </h1>
        <h1> {location.weather[0].main} </h1>
      </div>
    </div>
    )
}