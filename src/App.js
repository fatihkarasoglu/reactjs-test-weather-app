import { useState, useEffect } from "react";
import axios from "axios";

import Location from "./components/Location";

function App() {

  const data = '48afb245d0fe10f13555b750e33fb5ba';

  const [search, setSearch] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    async function getData() {
      try{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=tr&appid=${data}&units=metric`);
        setLocation(res.data);
      } catch(err) {
        console.log(err);
      }
    }
    getData();
  }, [search]);

  return (
    <div className="">
      <input onChange={(e) => setSearch(e.target.value)} type="text" />
      {location && <Location location={location} />}
    </div>
  );
}

export default App;
