export default function fetchWeather(city) {
    let url = `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=dddc7bf46a30acdd518f90eaf0d9dbce`
  
    return fetch(url).then((response) => response.json())
  }