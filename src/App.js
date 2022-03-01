import WeatherWidget from "./components/WeatherWidget";
import { useState } from "react";

function App() {
  const [unit, setUnit] = useState("C");

  const [theme, setTheme] = useState("dark");

  function toggleTheme(event) {
    setTheme(event.target.value);
  }

  return (
    <div className={`App ${theme}`}>
      <h1>React - state and events</h1>
      <select onChange={toggleTheme}>
        <option value="light" selected={theme === "light"}>
          Light theme
        </option>
        <option value="dark" selected={theme === "dark"}>
          Dark theme
        </option>
      </select>

      <button onClick={() => setUnit("C")}> °C </button>
      <button onClick={() => setUnit("F")}> °F </button>

      <WeatherWidget city="Miami" icon="🟡" celsius={29} />
      <WeatherWidget city="Mexico City" icon="⛈️" celsius={17} unit={unit} />
      <WeatherWidget city="Berlin" icon="🌥️" celsius={20} unit={unit} />
      <WeatherWidget city="Barcelona" icon="🌤️" celsius={28} unit={unit} />
    </div>
  );
}

export default App;
