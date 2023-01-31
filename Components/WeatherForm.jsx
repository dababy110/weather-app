import React, { useState, useRef } from "react";
import WeatherFormStyles from "./WeatherForm.module.css";
import WeatherMainInfo from "./WeatherMainInfo";

function WeatherForm({ onChangeCity, weather }) {
  const [city, setCity] = useState("");

  const ref = useRef(null);

  return (
    <>
      <form
        className={WeatherFormStyles.container}
        onSubmit={(e) => {
          e.preventDefault();
          onChangeCity(city);
          const showWeather = ref.current;
          showWeather.classList.toggle("show-box");
        }}
      >
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <input
          className={WeatherFormStyles.input_search}
          type="text"
          placeholder={"Search the city"}
          //Funcionalidad de la busqueda
          onChange={(e) => {
            const value = e.target.value;

            if (value !== "") {
              setCity(value);
            }
          }}
        />
      </form>
      <WeatherMainInfo weather={weather} ref={ref} />
    </>
  );
}

export default WeatherForm;
