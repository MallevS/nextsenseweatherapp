const wrapper = document.querySelector(".wrapper"),
wIcon = document.querySelector(".weather-part img");

function requestApi(city) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2e39a8a80c429b8185b804e58cda3321`;
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
  }
  
  requestApi("skopje");
  
  function weatherDetails(info){
    const city = info.name;
    const country = info.sys.country;
    const {description, id} = info.weather[0];
    const {feels_like, humidity, temp} = info.main;

    if(id == 800){
        wIcon.src = "icons/clear.svg";
    } else if(id >= 200 && id <= 232){
        wIcon.src = "icons/storm.svg";
    } else if(id >= 600 && id <= 622){
        wIcon.src = "icons/snow.svg";
    } else if(id >= 701 && id <= 781){
        wIcon.src = "icons/haze.svg";
    } else if(id >= 801 && id <= 804){
        wIcon.src = "icons/cloud.svg";
    } else if((id >= 300 && id <= 321) || (id >= 500 && id <= 531)){
        wIcon.src = "icons/rain.svg";
    }

    wrapper.querySelector(".temp .numb").innerText = Math.floor(temp);
    wrapper.querySelector(".weather").innerText = description;
    wrapper.querySelector(".location span").innerText = `${city}, ${country}`;
    wrapper.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
    wrapper.querySelector(".humidity span").innerText = humidity + "%";

    console.log(info);
  }