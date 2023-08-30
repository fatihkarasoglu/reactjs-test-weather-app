import axios from "axios";
import { useState, useEffect } from "react";

import Location from "./Location";

function App() {

  const apiKey = '48afb245d0fe10f13555b750e33fb5ba';

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState();

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
    <div className="min-w-full min-h-screen flex justify-center">
      <div className="">
        <input onChange={(e) => setSearch(e.target.value)} placeholder="Konumunuzu girin..." type="text" className="px-3 py-3 text-slate-800 border-0 shadow rounded placeholder-blue-400 w-[250px]"/>
        {location && <Location location={location} />}
      </div>
    </div>
  );
}

export default App;
