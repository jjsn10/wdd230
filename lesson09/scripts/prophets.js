const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) =>{
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet)=>{
        //create elements to add to the div.cards elements
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birth_date = document.createElement('span');
        let birth_place = document.createElement('span')
        let portrait = document.createElement('img');

        //Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent =`${prophet.name} ${prophet.lastname}`;

        birth_date.textContent = `Date of Birth: ${prophet.birthdate}`

        birth_place.textContent = `Place of Birth: ${prophet.birthplace}`
        
        //Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src',prophet.imageurl);
        portrait.setAttribute('alt',`Portrait of ${prophet.name}_${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width','340');
        portrait.setAttribute('heigth', '440');

        //Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(birth_date);
        card.appendChild(birth_place);
        card.appendChild(portrait);

        cards.appendChild(card);
        
    })
}
