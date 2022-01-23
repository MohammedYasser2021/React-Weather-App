import React from 'react'

export default function Weather({
  temperature,
  city,
  country,
  humidity,
  desc,
  error,
}) {
  return (
    <div className="weather">
      {city && (
        <div>
          <span>City: </span>
          <h3>{city}</h3>
        </div>
      )}

      {country && (
        <div>
          <span>Country: </span>
          <h3>{country}</h3>
        </div>
      )}
      {temperature && (
        <div>
          <span>Temperature: </span>
          <h3>{temperature}</h3>
        </div>
      )}
      {desc && (
        <div>
          <span>Description: </span>
          <h3>{desc}</h3>
        </div>
      )}
      {humidity && (
        <div>
          <span>Humidity: </span>
          <h3>{humidity}</h3>
        </div>
      )}
      {error && (
        <div className="error">
          <h3>{error}</h3>
        </div>
      )}
    </div>
  )
}
