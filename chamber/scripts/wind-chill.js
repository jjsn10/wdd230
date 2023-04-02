/*
calculate the wind chill factor
*/

const temp = document.getElementById("temp");
let tempcal = 0;
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
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error.message);
    }
  }
  
apiFetch();
/* End Getting Weather Forecast for Saratoga Springs */

/* Showing Weather forecast */
function displayResults(weatherData) {
    temp.innerText = `${weatherData.list[0].main.temp.toFixed(0)}`;
    speed.innerText = `${weatherData.list[0].wind.speed.toFixed(0)}`;
    tempcal = weatherData.list[0].wind.speed.toFixed(0);
    //console.log("Line 38: ",temp.innerText);
    //console.log("37: ",weatherData.list[0].wind.speed.toFixed(0));
    //console.log("Line 39:",tempcal);
    parameters = {
      'tempcalc': temp.innerText,
      'speedcalc':speed.innerText
    }
    //console.log("line 45",parameters);
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    calcWindChill(parameters);
  }
/* End Showing Weather forecast */

/* checking wind chill specification temperature <=50F and wind speeds >3.0 mph */

function calcWindChill(parameters){
  const {tempcalc,speedcalc} = parameters;
  /*console.log("Line 60: ",tempcalc,speedcalc);*/
  /*console.log("Line 59 :",parameters.tempcalc);
  console.log("Line 60 :",parameters.speedcalc);*/

if (tempcalc <= 50 && speedcalc > 3){
    f= 34.74 + 0.6215*tempcalc - 35.75*speedcalc**0.16 +0.4275*tempcalc*speedcalc**0.16;
    f_rounded = Math.round(f * (10^2))/(10^2);
    /*console.log("14:", Math.round(f * (10^2))/(10^2));
    console.log("wind chill");*/
    let wc = document.getElementById("windchill");
    wc.textContent = `${f_rounded} Mph`;
}else{
    let wc = document.getElementById("windchill");
    wc.textContent = "N/A";
}

}