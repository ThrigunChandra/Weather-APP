const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = YOUR_API_KEY;
const searchBox = document.querySelector(".search input"); //txt1
const searchBtn = document.querySelector(".search button"); // btn

async function checkWeather(city){
    // response from api after inserting the link
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
        
        document.querySelector(".error").style.display = "none";
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weather img").src = `images/` + data.weather[0].main.toLowerCase() + ".png";
    
        document.querySelector(".weather").style.display = "block";
    
    }
}

function temp(){
    let city = searchBox.value;
    checkWeather(city);
}

searchBtn.addEventListener("click",temp);
