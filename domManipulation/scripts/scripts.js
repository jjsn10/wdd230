
const listScriptures = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector("#favchap");

button.addEventListener('click', function(){
    if (input.value !==''){
        let myPassage = input.value;
        //console.log(input.value);
        //console.log(listScriptures)
        const li = document.createElement('li')
        const delBtn = document.createElement('button');
        
        li.textContent = myPassage;
        delBtn.textContent ='❌';

        listScriptures.appendChild(li);
        li.appendChild(delBtn);

        delBtn.addEventListener('click', ()=>{
            listScriptures.removeChild(li);
        })
    }
    input.value ='';
    input.focus();
   
});
