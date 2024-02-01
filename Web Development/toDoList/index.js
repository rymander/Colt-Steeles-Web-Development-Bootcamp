let list = document.querySelector('#list')
let addBtn = document.getElementById('add')
let item = document.getElementById('item')
let lis = document.querySelectorAll('li')



addBtn.addEventListener('click', function(event){
    let value = item.value;
    let li = document.createElement('li')
    li.textContent = value
    list.appendChild(li);
    event.preventDefault();
})

document.querySelector(submit).addEventListener('click', function(e){
    e.preventDefault();
})

lis.addEventListener('double click', function(e){
    e.preventDefault();
    
})