import React, { useState } from 'react'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css'
const API_KEY = '0a64b0cbe7a8d709c24d92eb1108b6fe'
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
export default function App() {
  const [temperature, setTemperature] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [humidity, setHumidity] = useState('')
  const [desc, setDesc] = useState('')
  const [error, setError] = useState('')
  const getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`,
    )
    const data = await api.json()
    if (city && country) {
      setTemperature(data.main.temp)
      setCity(data.name)
      setCountry(data.sys.country)
      setHumidity(data.main.humidity)
      setDesc(data.weather[0].description)
      setError('')
    } else {
      setError('Please Complete Data')
      setTemperature('')
      setCity('')
      setCountry('')
      setHumidity('')
      setDesc('')
    }
  }
  return (
    <div className="App">
      <Form getWeather={getWeather} />
      <Weather
        temperature={temperature}
        city={city}
        country={country}
        humidity={humidity}
        desc={desc}
        error={error}
      />
    </div>
  )
}
