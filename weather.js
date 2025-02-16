const apiKey = "424c880f4e397861f422fbe7a957d1b3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// for searching city 

const seachBox = document.querySelector(".search input");
const seachBtn = document.querySelector(".search button");

// for Weather Icon varible
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appId=${apiKey}`);

    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " 15 km/h";

        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Haze"){
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        }

}

seachBtn.addEventListener("click", ()=>{
    checkWeather(seachBox.value);
});

