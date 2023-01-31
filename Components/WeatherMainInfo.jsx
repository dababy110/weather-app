import React from "react";
import WeatherMainInfoStyles from "./WeatherMainInfo.module.css";

const WeatherMainInfo = React.forwardRef(({ weather }, ref) => {
  return (
    <div ref={ref} className={WeatherMainInfoStyles.mainInfo} id="hide-box">
      <div className={WeatherMainInfoStyles.mainInfo_button}>
        <button className={WeatherMainInfoStyles.button}
        onClick={() => {
          const removeClass = document.querySelector('#hide-box')
          removeClass.classList.remove('show-box')
        }}>
          <div className={WeatherMainInfoStyles.arrow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div className={WeatherMainInfoStyles.country}>
        {weather?.location.country}
      </div>
      <div className={WeatherMainInfoStyles.city}>{weather?.location.name}</div>
      <div className={WeatherMainInfoStyles.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            alt={`${weather?.current.condition.text}`}
            width="128px"
          />
        </div>
        <div className={WeatherMainInfoStyles.weatherConditions}>
          <div className={WeatherMainInfoStyles.condition}>
            {weather?.current.condition.text}
          </div>
          <div className={WeatherMainInfoStyles.current}>
            {weather?.current.temp_c}°C
          </div>
        </div>
      </div>
      <iframe
        className={WeatherMainInfoStyles.iframe}
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
});

export default WeatherMainInfo;
