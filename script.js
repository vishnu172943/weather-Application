const APIkey="a24712aea57f507cc7025ee735793238";
const APIurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchInput=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
const response =await fetch(APIurl+city+`&appid=${APIkey}`);
var data= await response.json();
console.log(data);
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
 if(data.weather[0].main=="Clouds"){
    weatherIcon.src="clouds.png";
}
else if(data.weather[0].main==="Clear"){
    weatherIcon.src="clear.png";
}
else if(data.weather[0].main==="Drizzle"){
    weatherIcon.src="drizzle.png";
}
else if(data.weather[0].main==="Mist"){
    weatherIcon.src="mist.png";
}
}


searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value);
});


