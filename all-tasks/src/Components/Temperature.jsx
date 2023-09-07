import React, { useState } from "react";
import styles from "../Styles/Temperature.module.css";

const Temperature = () => {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("");
  const [celsiusResult, setCelsiusResult] = useState("");
  const [fahrenheitResult, setFahrenheitResult] = useState("");

  const handleInput = (e) => {
    setTemperature(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
    setCelsiusResult("");
    setFahrenheitResult("");
  };

  const handleCelsius = () => {
    if (unit === "Fahrenheit") {
      const fahrenheit = parseFloat(temperature);
      const celsius = ((fahrenheit - 32) * 5) / 9;
      setCelsiusResult(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
    } else {
      setCelsiusResult("");
      alert("Please Select Correct Unit");
    }
  };
  const handleFahrenheit = () => {
    if (unit === "Celsius") {
      const celsius = parseFloat(temperature);
      const fahrenheit = (celsius * 9) / 5 + 32;
      setFahrenheitResult(
        `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`
      );
    } else {
      setFahrenheitResult("");
      alert("Please Select Correct Unit");
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>Temperature Converter App</h1>
        <input
          type="number"
          placeholder="Enter Temperature Value"
          onChange={handleInput}
          value={temperature}
        />
        <select
          onChange={handleUnitChange}
          value={unit}
          className={styles.selectTag}
        >
          <option value="">Select Unit</option>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
        <button onClick={handleCelsius} className={styles.btn}>
          Convert to Celsius
        </button>
        <button onClick={handleFahrenheit} className={styles.btn}>
          Convert to Fahrenheit
        </button>
        {celsiusResult && <div>{celsiusResult}</div>}
        {fahrenheitResult && <div>{fahrenheitResult}</div>}
      </div>
    </div>
  );
};

export default Temperature;
