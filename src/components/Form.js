import React from 'react'

export default function Form({ getWeather }) {
  return (
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="Enter Your City" />
      <input type="text" name="country" placeholder="Enter Your Country" />
      <input type="submit" value="Get Weather" />
    </form>
  )
}
