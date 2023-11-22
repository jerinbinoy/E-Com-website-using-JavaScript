

const addCartArray = [];

 function addToCart(pid){
    
        let cartsize = Number(document.getElementById('cart-btn').innerText);
        document.getElementById('cart-btn').innerHTML = cartsize + 1 ;
        let cartquantity = cartsize + 1 ;
        localStorage.setItem('cartquantity',JSON.stringify(cartquantity));


        addCartArray.push({pid:pid});

        localStorage.setItem('cartlive',JSON.stringify(addCartArray));
    
        
} 