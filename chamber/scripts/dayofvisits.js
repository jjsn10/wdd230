
let today = Date.now();
console.log("line 3:",today);

//let startDate = new Date(today.getFullYear(),3,5);
//console.log("line 6",today.getFullYear());
//console.log("line 7",today.getDate());
//console.log("line 8",month,getMonth());
//console.log("line 6", startDate);
//console.log("line 7:",startDate.getTime())

if (localStorage.getItem("startDate")){
    let priotdate = localStorage.getItem("startDate");
    console.log(priotdate);
    let amountDays = ((today - priotdate) / 84600000).toFixed(0);
    console.log(amountDays);
    document.getElementById("days").textContent = `You have visited this website ${amountDays} days`;
}else{
    document.getElementById("days").textContent =' This is your first time';
    console.log("This is your first time");
}
localStorage.setItem("startDate",today)

//et amountDays = (Date.now() - startDate.getTime()) / 84600000;


//console.log("Line 12:",amountDays);
