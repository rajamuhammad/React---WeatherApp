import React,{useState} from 'react'
import axios from 'axios'
import './index.css'

function App() {

  const [data,setdata] = useState({})
  const [location,setlocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2084644abc3018216638f87b312ee3fd`

  const searchLocation = (event) =>
  {

    if(event.key==='Enter')
    {
      axios.get(url)
      .then((response) => {
      setdata(response.data)
      console.log(response.data)
    })
    setlocation('')
    }
   

      
  
  }

  
  return (
    <div className="app">
        <div className="search">
          <input 
          value={location}
          onChange={event => setlocation(event.target.value)}
          placeholder='Enter your location'
          onKeyPress={searchLocation}
          type="text" 
         
          />
        </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{((data.main.temp-32)/1.8).toFixed(0)} * C </h1> : null}
        
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].main} </p> : null}
        
          </div>
        </div>

{data.main != undefined && 

  <div className="bottom">
          <div className="feels">
            {data.main ? <p>{((data.main.feels_like-32)/1.8).toFixed(0)} * C </p> : null}
        
        <p>Feel Like</p>
          </div>
          <div className="humidity">
          {data.main ? <p className='bold'>{data.main.humidity} % </p> : null}
          <p>Humidity</p>
          </div>
          <div className="wind">
          {data.wind ? <p className='bold'>{data.wind.speed} MPH </p> : null}
          <p>Wind Speed</p>
          </div>
        </div>


}

        


      </div>
      
    </div>
  );
}

export default App;
