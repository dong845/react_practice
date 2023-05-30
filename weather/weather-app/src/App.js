import React from "react";
import {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCloud, faSun, faCloudRain, faSnowflake, faSmog } from '@fortawesome/free-solid-svg-icons';

const API_KEY = "b2eb484de1c702d6a764fa557650f85f";

function Weather(props) {
  const code = props.weathercode.substring(0, 2);
  console.log(code);
  if (code==="01"){
    return <FontAwesomeIcon icon={faSun}/>;
  }else if (code==="02" || code==="03" || code==="04") {
    return <FontAwesomeIcon icon={faCloud} />;
  }else if (code === "09" || code === "10" || code === "11") {
    return <FontAwesomeIcon icon={faCloudRain} />;
  }else if (code === "13") {
    return <FontAwesomeIcon icon={faSnowflake} />;
  }else if (code === "50") {
    return <FontAwesomeIcon icon={faSmog} />;
  }
}

function Info(props) {
  return (
    <>
      <p>Temperature: {props.temperature}</p>
      <p>Temperature Range: {props.minTemperature}~{props.maxTemperature}</p>
      <p>Humidity: {props.humidity}</p>
      <p>Wind Speed: {props.windspeed}</p>
      <p>Wind Degree: {props.deg}</p>
    </>
  )
}

function App() {
  const [cityname, setCityName] = useState("Leiden");
  const [weatherdata, setWeatherData] = useState("");
  const [weathercode, setWeatherCode] = useState("");
  const [status, setStatus] = useState(false);

  async function get_geo (city) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`;
    const data = await fetch(url).then(res=>res.json())
    const lat = data[0].lat;
    const lon = data[0].lon;
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    const weather_data = await fetch(weather_url).then(res=>res.json());
    const weather_temp = weather_data.weather[0].main;
    setWeatherData(weather_temp);
    const weather_code = weather_data.weather[0].icon;
    setWeatherCode(weather_code);
    setStatus(!status);
  }

  return (
    <div className="App">
      <h1>Welcome to Use the Weather App</h1>
      <div className="search">
          <input type="text" placeholder="Input City Name" onChange = {e=>setCityName(e.target.value)} value={cityname} />
          <button onClick={() => get_geo(cityname)}>
              <FontAwesomeIcon icon={faSearch} size={40}/>
          </button>
      </div>
      {
        status ? (
          <div className="result">
            <h2>Weather: {weatherdata}</h2>
            <div className="info">
              <div className="imgs">
                <Weather weathercode = {weathercode} />
              </div>
              <div className="datas">
              </div>
            </div>
          </div>
        ) : ''
      }
    </div>
  );
}

export default App;
