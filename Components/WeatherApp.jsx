import React, { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherAppStyles from "./WeatherApp.module.css";

function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    //con este hook tenemos la posibilidad de ejecutar codigo cuando carga la aplicacion o cuando el componente sufre un renderizado o cuando se destruye
    loadInfo();
  }, []); //Este es un arreglo de dependecias, si este esta vacio significa que el useEffect solo se va a ejecutar 1 vez

  useEffect(() => {
    document.title = `Weather | ${weather?.location.country ?? ""}`; // ? significa que es opcional ?? significa que si no se cumple una condicion se ejecuta otra
  }, [weather]); //si queremos que el useEffect se ejecute cada vez que un estado cambie colocamos la variable dentro del array

  async function loadInfo(city = "Costa Rica") {
    try {
      const request = await fetch(
        `${import.meta.env.VITE_REACT_APP_URL}&key=${
          import.meta.env.VITE_REACT_APP_KEY
        }&q=${city}`,
        { referrerPolicy: "unsafe_url" }
      );

      const json = await request.json();
      setWeather(json);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <main className={WeatherAppStyles.WeatherContainer}>
      <div className={WeatherAppStyles.WeatherMain}>
        <h1 className={WeatherAppStyles.title}>
          Weather <span className={WeatherAppStyles.title_span}>App</span>
        </h1>
        <WeatherForm
          weather={weather}
          onChangeCity={(city) => {
            setWeather(null);
            loadInfo(city);
          }}
        />
        {/* {WeatherAppStyles.WeatherInfo}
        {weather ? (
          <WeatherMainInfo weather={weather} />
        ) : (
          <Loading />
        )} */}
      </div>
    </main>
  );
}

export default WeatherApp;
