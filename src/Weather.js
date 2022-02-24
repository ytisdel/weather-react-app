import React from "react";
//import axios from "axios";

export default function Weather() {
  let weatherData = {
    city: "Phoenix, AZ",
    date: "February 6, 2022",
    temperature: "75",
    humidity: "80%",
    wind: "30 km/h",
    air: "Good 👍",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div className="weather">
      <div className="search">
        <form className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search a City"
              autocomplete="off"
              autofocus="on"
            />
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              value="search"
            >
              Submit
            </button>

            <span>
              <button className="btn btn-success mb-3 current-location">
                Current Location
              </button>
            </span>
          </div>
        </form>
      </div>
      <br />
      <div className="row">
        <div className="col-6 float-left" styles="width: 200px">
          <div className="card" styles="width: 15rem">
            <div className="card-body">
              <div className="float-left weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  className="weather-icon float-left"
                  alt="weather-icon"
                />
                <strong className="temperature">
                  {weatherData.temperature}{" "}
                </strong>
                <span className="units">
                  <a href="/" className="active">
                    °C{""}
                  </a>
                  |
                  <a href="/" className="fahrenheit-sign">
                    °F
                  </a>
                </span>
              </div>
              <div className="weather-attributes">
                <h6 className="card-subtitle mb-2 text-muted weather-condition">
                  {" "}
                </h6>
                <br />

                <h6 className="card-subtitle mb-2 text-muted">
                  Humidity: {weatherData.humidity}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Wind: {weatherData.wind}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Air Quality: {weatherData.air}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 mt-5" styles="width: 200px">
          <div class="current-city">
            <h2>{weatherData.city}</h2>
          </div>

          <span class="date">
            <h5>{weatherData.date}</h5>
          </span>
        </div>
      </div>
      <br />
      <div class="weather-forecast"></div>
      <a
        href="https://github.com/ytisdel/weather-react-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-Sourced
      </a>{" "}
      by Yalona Tisdel
    </div>
  );
}
