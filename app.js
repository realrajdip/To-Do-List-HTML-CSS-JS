const inputBox = document.getElementById('input-box'); 
const listContainer = document.getElementById('list_container');

const addBtn = document.querySelector('button'); 

function addTask() {
    if(inputBox.value == ''){
        alert('You must write something!'); 
    }else{
        let li = document.createElement('li'); 
        let addText = document.createTextNode(inputBox.value); 
        li.appendChild(addText);  
        listContainer.append(li); 
        let span = document.createElement('span'); 
        span.innerHTML = '\u00d7'
        li.appendChild(span); 
    } 
    inputBox.value = ''; 
    saveData(); 
}
addBtn.addEventListener('click',()=>{
    addTask(); 
})

document.querySelector('#list_container').addEventListener("click",(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');  
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();  
        saveData();
    }
},false); 


//save data to local storage
 
function saveData() {
    localStorage.setItem('myData',listContainer.innerHTML)
}

function showList(){
    listContainer.innerHTML = localStorage.getItem('myData'); 
}
showList(); 