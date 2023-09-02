import axios from "axios";
import { useState, useEffect } from "react";

import Location from "./components/Location";

function App() {

  const apiKey = '48afb245d0fe10f13555b750e33fb5ba';

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric&lang=tr`);
        console.log(response)
        setLocation(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [search]);

  return (
    <div className="min-w-full min-h-screen flex flex-col items-start justify-end bg-[url('./images/lake.jpg')] bg-cover">
      <div>
        <input onChange={(e) => setSearch(e.target.value)} placeholder="Konum girin..." type="text" className="mb-60 ml-2 px-3 py-3 text-green-700 bg-green-300 border-0 shadow rounded placeholder-green-700 w-[250px] outline-none"/>
      </div>
      {location && <Location location={location} />}
      <div class='absolute bottom-0 w-full h-2/6 bg-black opacity-50'></div>
    </div>
  );
}

export default App;