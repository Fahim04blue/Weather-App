
    const citySearch = document.getElementById('city-search');
    const submitBtn = document.getElementById('submit');
    const city= document.getElementById('city');
    const temp = document.getElementById('temp');
    const description= document.getElementById('description');
    const weatherIcon = document.getElementById('weather-img');
    const celsius = document.getElementById('celsius');
    const country = document.getElementById('country');
    const api_key = '16167456dd08790ee605187b2c4ccd96';
    const msg = document.getElementById('error');
    //require('dotenv').config();
    // console.log(process.env);

  

    
    submitBtn.addEventListener('click',()=>{
        
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&units=metric&appid=${api_key}`)
    .then(res=>res.json())
    .then(data=>{
       city.innerText= data.name;
       
       country.innerText=data.sys.country;
       country.style.display="inline";
       temp.innerText= Math.round(data.main.temp) ;
       celsius.style.display='inline';
       description.innerText=data.weather[0].description;
       const {icon}=data.weather[0];
       const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`
       weatherIcon.src= iconUrl;
       weatherIcon.style.display='inline';

       console.log(data)
    })
    .catch(() => {
        msg.textContent = "Please search for a valid city 😩";
       city.innerText='';
       country.innerText='';
       country.style.display="none";
       weatherIcon.style.display='none';
       temp.innerText='';
       celsius.style.display='none';
       description.innerText='';
        
      });
      msg.textContent = "";
    
})


