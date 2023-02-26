import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="serch"
              placeholder="enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Lviv</h1>
      <ul>
        <li>Wednesday 8:15</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="" />
          <span className="temperature">5</span>
          <span className="units">℃</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Presipitation: 10%</li>
            <li>Humidity: 78%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
