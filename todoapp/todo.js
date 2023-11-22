
let todo = [];



function addtodo(){
    let name = document.querySelector('.inputfield').value ;
    let duedate = document.querySelector('.date').value ;
    todo.push({name , duedate}) ;
    document.querySelector('.inputfield').value = '' ;
    document.querySelector('.date').value = '' ;
    displaytodo() ;
}

function displaytodo(){
    
    let html = '' ; 

    for (i = todo.length -1 ; i > -1 ; i--){
        let todolist = todo[i] ;
        let {name} = todolist;
        let {duedate} = todolist;
        let list  = `<div class="m-5 d-flex justify-content-evenly "><div class="col-4"> ${name}</div> <div class="col-4">${duedate}</div class="col-4"> <button class="btn btn-danger shadow" onclick="todo.splice(${i},1);displaytodo();">Remove</button></div>` ;
        html += list ;
        
    }
    console.log(html) ;
    document.querySelector('.output').innerHTML = html ;
}
