import React, { useState } from 'react';
const api = {
  key: "b85660c65b544d1b039c36a68b5358a9",
  base: " https://api.openweathermap.org/data/2.5/"
}

//https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02 

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  function handleChange(event){
      const val = event.target.value;
      setQuery(val);
  }

 async function Search(event) {
     if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  function dateBuilder(d){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main !== "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={handleChange}
            value={query}
            onKeyPress={Search}
          />
        </div>
        {(typeof weather.main !== "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;





// import React,{useState} from 'react';
// import ReactDOM from 'react-dom';



// function App(){
    
//    const [query, setQuery] = useState('');
//   const [weather, setWeather] = useState({});
    
//     function handleChange(){
//         const val = event.target.value;
//         setQuery(val)
//     }
    
//     const key = {
//     key : "723379afbfa69d4a231b617f44f65a52",
//     base : "https://api.openweathermap.org/data/2.5/"
//    }
    
//    function search(event){
//        if(event.onKeyPress==="Enter"){
//            try {
//             const res = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
//             const data  = await res.json();
//             setMovies(data.results);
//         }catch(err){
//             console.error(err);
//         }
//        }
//     }
    
    
//     function dateBuilder(d){
//         let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
//         let day = days[d.getDay()];
//         let date = d.getDate();
//         let month = months[d.getMonth()];
//         let year = d.getFullYear();
        
//         return `${day} ${date} ${month} ${year}`
//     }
    
//     return (
//       <div className={(weather.main.temp > 16) ? 'app warm' : 'app'}>
//       <main>
//         <div className="search-box">
//           <input 
//             type="text"
//             className="search-bar"
//             placeholder="Search..."
//             onChange={handleChange}
//             value={query}
//             onKeyPress={search}
//           />
//           </div>
//           <div className="location-box">
//             <div className="location">{weather.name}, {weather.sys.country}</div>
//             <div className="date">{dateBuilder(new Date())}</div>
//           </div>
//           <div className="weather-box">
//             <div className="temp">
//               {Math.round(weather.main.temp)}°c
//             </div>
//             <div className="weather">{weather.weather[0].main}</div>
//           </div>
       
//       </main>
//     </div>
//     );
//   }

// export default App;