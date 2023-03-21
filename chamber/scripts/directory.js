const url = 'data.json';

async function getBusinessData(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.business);
    //displayProphets(data.prophets);
}

getBusinessData();