//Creating Array of Months
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

//Const for Short weekday
const optionShort ={
    weekday:"short"
};
//Const for long weekday
const optionLong = {
    weekday:"long"
};

const options_date = {
    day:'2-digit',
    month:'2-digit',
    year:'numeric'
}
const options_time ={
    hour12:false
}
//Getting the date without format
//const getCurrentDate = new Date('02-08-2023');
const getCurrentDate = new Date();

//getting and format the year as a number
const year = getCurrentDate.getFullYear();
const day = getCurrentDate.getDay();
console.log("27:",day);

let html_year=document.querySelector('#year');
html_year.textContent = year;

let date_formated = getCurrentDate.toLocaleDateString('en-US',options_date)
let current_time = getCurrentDate.toLocaleTimeString('en-US',options_time)

let html_date_time=document.querySelector('#date_time');
html_date_time.textContent =` ${date_formated} ${current_time}`

//Getting Current short Day a long Date
const sDay= getCurrentDate.toLocaleDateString('en-US',optionShort);
const lDay= getCurrentDate.toLocaleDateString('en-US', optionLong);
const numberDay = getCurrentDate.getDate();
const monthName = month[getCurrentDate.getMonth()];

let dateinf = document.getElementById("date");
console.log("45",sDay);
console.log("46",lDay);
if (sDay === "Mon" || sDay === "Tue"){
    dateinf.textContent = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m";
    //console.log(dateinf);
}else{
    dateinf.textContent =`${lDay}, ${numberDay} ${monthName} ${year}`;
    //console.log(dateinf.value);
    //console.log(`${lDay}, ${numberDay} ${monthName} ${year} `);
}

