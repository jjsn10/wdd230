const url = 'data.json';

async function getBusinessData(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.business);
    //displayProphets(data.prophets);
}

getBusinessData();

const displayBusinesses = (businesses) =>{
    const cards = document.querySelector('div.cards');

    businesses.forEach((business)=>{
        //create elements to add to the div.cards elements
        let section = document.createElement('section');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        /*let birth_date = document.createElement('span');
        let birth_place = document.createElement('span');*/
        let logo = document.createElement('img');
        let a = document.createElement('a');

        //Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent =`${business.name} ${business.lastname}`;

        /*birth_date.textContent = `Date of Birth: ${business.birthdate}`

        birth_place.textContent = `Place of Birth: ${business.birthplace}`*/
        
        //Build the image portrait by setting all the relevant attribute
        logo.setAttribute('src',business.imageurl);
        logo.setAttribute('alt',`Portrait of ${business.name}_${business.lastname}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width','340');
        logo.setAttribute('heigth', '440');

        //Append the section(card) with the created elements
        section.appendChild(h2);
        section.appendChild(birth_date);
        section.appendChild(birth_place);
        section.appendChild(portrait);

        cards.appendChild(card);
        
    })
}
