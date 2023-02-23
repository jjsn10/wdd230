/*
calculate the wind chill factor
*/

const temp = document.getElementById("temp").innerText;
const speed = document.getElementById("speed").innerText;
console.log(temp);
console.log(speed);

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

