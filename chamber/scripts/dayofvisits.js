
let today = new Date();
//console.log("line 3:",today);

let startDate = new Date(today.getFullYear(),3,5);
//console.log("line 6",today.getFullYear());
//console.log("line 7",today.getDate());
//console.log("line 8",month,getMonth());
//console.log("line 6", startDate);
//console.log("line 7:",startDate.getTime())
localStorage.setItem("startDate",startDate.getTime())

//et amountDays = (Date.now() - startDate.getTime()) / 84600000;
let amountDays = (Date.now() - localStorage.getItem("startDate")) / 84600000;

console.log("Line 12:",amountDays);
