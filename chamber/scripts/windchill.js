/*
calculate the wind chill factor
*/

const temp = document.getElementById("temp");
const speed = document.getElementById("speed");
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.figcaption');


/*Getting Weather Forecast for Saratoga Springs */
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.346394&lon=-111.910065&units=imperial&appid=26c0716e28b534ccf5a476a4f00d54b4';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();
/* End Getting Weather Forecast for Saratoga Springs */

/* Showing Weather forecast */
function displayResults(weatherData) {
    temp.innerText = `${weatherData.list[0].main.temp.toFixed(0)}`;
    speed.innerText = `${weatherData.list[0].wind.speed.toFixed(0)}`;
    //console("37: ",weatherData.list[0].main.wind.speed);

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }
/* End Showing Weather forecast */
console.log("Line 46: ", temp.getElementsByTagName("span").innerText);
console.log("Line 47: ", speed.textContent);
/* checking wind chill specification temperature <=50F and wind speeds >3.0 mph */

if (temp <= 50 && speed > 3){
    f= 34.74 + 0.6215*temp - 35.75*speed**0.16 +0.4275*temp*speed**0.16;
    f_rounded = Math.round(f * (10^2))/(10^2);
    console.log("14:", Math.round(f * (10^2))/(10^2));
    console.log("wind chill");
    let wc = document.getElementById("windchill");
    wc.textContent = `${f_rounded} Mph`;
}else{
    let wc = document.getElementById("windchill");
    wc.textContent = "N/A";
}

