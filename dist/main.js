(()=>{"use strict";const e=async function(e){try{let t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&appid=4d3ec4866c4270e5095e1511ffb1bd78&units=metric`,{mode:"cors"});return function(e){let t={feelsLike:e.main.feels_like,humidity:e.main.humidity,temp:e.main.temp,temp_max:e.main.temp_max,temp_min:e.main.temp_min};console.log(t.temp_min,t.temp_max)}(await t.json())}catch(e){alert(e)}},t=document.getElementById("search-city");document.getElementById("search-city-button").addEventListener("click",(async()=>{""!==t.value?await e(t.value):alert("Please enter location")}))})();