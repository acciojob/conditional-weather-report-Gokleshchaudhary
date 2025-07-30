import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay"; // ✅ correct if both files are in /src
import "./styles/App.css"; // optional

const App = () => {
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });

  return (
    <div>
      {/* Do not remove the main div */}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
