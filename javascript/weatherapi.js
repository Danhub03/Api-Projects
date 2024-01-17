// Today's weather forecast
const getWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=59.3613&lon=17.9711&appid=846eafb6759b6afae2d952175294a7bf&units=metric')
    .then( res => res.json())
    .then( res => bruh(res))
    
}

const bruh = (res) => {
    const temp = Math.floor(res.main.temp);
    const feels_like = Math.floor(res.main.feels_like);
    console.log(res)
    document.getElementById('weatherBody').innerHTML += 
    `<h1 class = move>${res.name}, ${res.sys.country}</h1> 
   
    <h2 class = move2 > <i class="fa-solid fa-sun" style="color: #edf028;"></i> ${temp}&deg;   </h2>
    <p class = change>/ Feels like ${feels_like}&deg;</p> 
    <p class = change2> Speed: ${res.wind.speed}m/s W</p> 
    <p class = change2> Humidity: ${res.main.humidity}%</p> 
    `;
};

getWeather();

const getWeatherweek = () => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=2670879&exclude=current,hourly,minutely,alerts&appid=454041ea7e6b537bbedaee0c9bbc0592&units=metric')
        .then(res => res.json())
        .then(week => weekData(week))
}

const weekData = (week) => {
    // Create an object to keep track of the unique days
    const uniqueDays = {};

    week.list.forEach(element => {
        // Convert timestamp to a date string (sv-SE if you want the days to be in Swedish instead)
        const date = new Date(element.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });

        // If the date is not in the uniqueDays object, add it and display the information
        if (!uniqueDays[date]) {
            uniqueDays[date] = true;
            document.getElementById('weatherBody2').innerHTML += 
            `
            <td>${date}</td>
            <td>${Math.floor(element.main.temp)} °C</td>
            <td>${Math.floor(element.main.feels_like)} °C</td>
            <td>${element.weather[0].description}</td>
            `;
        }
    });
}

getWeatherweek();
