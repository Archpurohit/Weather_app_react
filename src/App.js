import React from "react";
import axios from "axios"
import { useState } from "react";

function App() {

  const [data,setData] = useState({})
  const [location,setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b074a274a35fca512da588073991e058`

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}
  return (
    <div className="app">
      <div className="search">
      <input
  value={location}
  onChange={event => setLocation(event.target.value)}
  onKeyDown={searchLocation}
  placeholder="Enter location"
  type="text"
/>

     </div>

      <div className="container">
        <div className="top"> </div>
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
        {data.main ? <h1>{data.main.temp}Celsius</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}

        </div>

{data.name != undefined &&

<div className="bottom">
           <div className="feels">
           {data.main ? <p>{data.main.feels_like} Celsius</p>: null}
           <p> Feels like</p>
           </div>
           <div className="humidity">
            {data.name ? <p className="bold">{data.main.humidity} %</p> : null}

            <p>humidity</p>
           </div>
           <div className="wind">
            {data.name ? <p className="bold">{data.wind.speed} km/h </p> : null}
            <p>Wind speed</p>
           </div>
        </div>


}


       </div>
    </div>
  );
}

export default App;
