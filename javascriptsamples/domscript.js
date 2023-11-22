function costcheck(){
   const input = Number(document.querySelector('.input').value) ;
   document.querySelector('.rate').innerHTML = input ;

   let addedtax = '';

   if (input < 500){
    tax =  input * 0.1;
    addedtax = tax + input ;
    document.querySelector('.output').innerHTML = addedtax ;
   }else {
    document.querySelector('.output').innerHTML = input ;
    }
}

function enterkey(){
    if (event.key === 'Enter'){
        costcheck();
    }
}