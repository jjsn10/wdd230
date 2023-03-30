const url = 'data.json';

async function getBusinessData(){
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.business);
    displayBusinesses(data.business);
}

getBusinessData();

const displayBusinesses = (businesses) =>{
    const article = document.querySelector('article.grid');

    businesses.forEach((business)=>{
        //create elements to add to the div.cards elements
        let section = document.createElement('section');
        let h3 = document.createElement('h3');
        let name = document.createElement('p');
        let phone =document.createElement('p');
        /*let birth_date = document.createElement('span');
        let birth_place = document.createElement('span');*/
        let logo = document.createElement('img');
        let website = document.createElement('a');

        //Build the h2 content out to show the prophet's full name - finish the template string
        h3.textContent =`${business.name}`;

        name.textContent = `${business.address}`;
        
        phone.textContent = `${business.phone_number}`;

        website.textContent = `${business.website}`;
        website.setAttribute('href',business.website);
        website.setAttribute('target','_blank');

        /*birth_date.textContent = `Date of Birth: ${business.birthdate}`

        birth_place.textContent = `Place of Birth: ${business.birthplace}`*/
        
        //Build the image portrait by setting all the relevant attribute
        logo.setAttribute('src',business.image);
        logo.setAttribute('alt',`Portrait of ${business.name}`);
        logo.setAttribute('loading', 'lazy');
        /*logo.setAttribute('width','340');
        logo.setAttribute('heigth', '100');*/

        //Append the section(card) with the created elements
        section.appendChild(logo);
        section.appendChild(h3);
        section.appendChild(phone);
        section.appendChild(name);
        section.appendChild(website);
        /*section.appendChild(birth_place);*/
        

        article.appendChild(section);
        
    })
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click",()=>{
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", ()=>{
    display.classList.add("list");
    display.classList.remove("grid");
});
