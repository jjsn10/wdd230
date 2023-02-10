const options_date = {
    day:'2-digit',
    month:'2-digit',
    year:'numeric'
}
const options_time ={
    hour12:false
}
//Getting the date without format
const getCurrentDate = new Date();

//getting and format the year as a number
const year = getCurrentDate.getFullYear();

let html_year=document.querySelector('#year');
html_year.textContent = year;

let date_formated = getCurrentDate.toLocaleDateString('en-US',options_date)
let current_time = getCurrentDate.toLocaleTimeString('en-US',options_time)

let html_date_time=document.querySelector('#date_time');
html_date_time.textContent =` ${date_formated} ${current_time}`

