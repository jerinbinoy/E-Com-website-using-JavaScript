
 const allProducts = [{pid:'lksdkjfiq6478',
                    img:'https://www.campusshoes.com/cdn/shop/products/GC-4005_GC-4005_NAVY-D.GRY_2_b36f3a60-8c5e-45ef-bc9e-7b7224813e14.jpg?v=1698477616&width=900',
                    name:"GC-4005 Navy Men's Clogs",
                    price:'Rs.1099'},
                    {pid:'ytoluhggg7637d7f',
                    img:'https://www.campusshoes.com/cdn/shop/products/CAMPCLINT_WHITE-L.GRY.jpg?v=1697518921&width=720',
                    name:"CAMP CLINT White Men's Sneakers",
                    price:'Rs.999'},
                    {pid:'ytollkh9284i',
                    img:'https://www.campusshoes.com/cdn/shop/products/GC-1025-BLUE_1_7b83e470-7fbc-4b0b-9820-bb7b250cb2d3.jpg?v=1670325781&width=900',
                    name:"Blue Men's Flip Flops",
                    price:'Rs.1899'},
                    {pid:'ytoluhalkjow98745',
                    img:'https://www.campusshoes.com/cdn/shop/products/SL-433_SL-433_F.GRN-BLK_1.jpg?v=1670325397&width=720',
                    name:"Green Men's Sliders",
                    price:'Rs.1199'},
                    {pid:'akjhguiw87644',
                    img:'https://www.campusshoes.com/cdn/shop/files/CITY-RIDE_5G-627_M.GRY-LMN.jpg?v=1690478383&width=900',
                    name:"CITY-RIDE Grey Men's Sneakers",
                    price:'Rs.1999'},
                    {pid:'skejuuiubijwr2798645',
                    img:'https://www.campusshoes.com/cdn/shop/products/RAISE_22L-129_L.PRPL-WHT_a0f662db-024e-4898-b1c7-726d8b2fa761.jpg?v=1670325431&width=900',
                    name:'RAISE Purple Women Running Shoes',
                    price:'Rs.1299'},
                    {pid:'ksyehjnggg7637d7f',
                    img:'https://www.campusshoes.com/cdn/shop/products/GC-4005_GC-4005_OFFWHT-L.GEY_2_455c018e-0108-49aa-b775-576783fa025a.jpg?v=1698477606&width=900',
                    name:"GC-4005 Off white Men's Clogs",
                    price:'Rs.1799'},
                    {pid:'oiwhgoona2987',
                    img:'https://www.campusshoes.com/cdn/shop/products/CAMPIAN_22K-109_RED-BLU_2.jpg?v=1670325809&width=720',
                    name:"CAMP IAN Red Kids Running Shoes",
                    price:'Rs.1599'},
                    {pid:'oiweoruhqb278435',
                    img:'https://www.campusshoes.com/cdn/shop/products/camp-shimmer-pink-ylw.jpg?v=1670325440&width=900',
                    name:"CAMP SHIMMER Pink Women Shoes",
                    price:'Rs.1299'},
                    {pid:'0938ryghiuhusdgf',
                    img:'https://www.campusshoes.com/cdn/shop/products/GC-4001_NAVY_1080x1440_f3d70479-3885-476d-be2d-1898917e7bd2.jpg?v=1683146597&width=720',
                     name:`GC-4001 Navy Men's Clogs`,
                    price:'Rs.899'}
                
                                    ];
                                    
let cartamnttotal = [];                                   

window.onload = function cartQuantity(){
   
  let cartQuantity = JSON.parse(localStorage.getItem('cartquantity'));
  console.log(cartQuantity) ;
  if (cartQuantity === null){
      
      document.getElementById('cart-btn').innerHTML = 0 ;
  }else{
    document.getElementById('cart-btn').innerHTML = cartQuantity ;
  }
};


addToCartJs();

function  addToCartJs(){
    let cartlive = JSON.parse(localStorage.getItem('cartlive'));
    console.log(cartlive);
    
    
     
    for ( let i = 0; i < cartlive.length; i++){
        
          for ( let j = 0 ; j < allProducts.length ; j++ ){
            console.log(cartlive[i].pid);
          

           if (cartlive[i].pid === allProducts[j].pid){

             let emptycart = document.getElementById('emptycart');
             emptycart.style.display = 'none';

              if (emptycart.style.display === 'none'){

                document.getElementById('product-description').innerHTML += `
                        
                            <div class="productdetails col-12  mt-5  rounded-3 border  border-2 p-3 mb-4 shadow" id="productdetails">
                            <h3 class="text-center ">Product Details</h3>
                            <div id="productlist">


                            <div class="d-flex productdescription border rounded p-3 col-12" >
                            <div class="col-6">
                              <img src="${allProducts[j].img}" alt="" class="img-fluid rounded-3 shadow ">
                            </div>
                            <div class="col-6 ms-3 mt-3" >
                              <h4>${allProducts[j].name}</h4>
                              <p>It is a most selling shoes from a renowned brand. </p>
                              <h5>${allProducts[j].price}</h5><br>
                              <h6>Quantity:  <select><option>${occurance(cartlive,cartlive[i].pid)}</option></select></h6><br><br>
                              <button class="btn btn-danger" onclick="removeproduct('${allProducts[j].pid}')">Remove Product</button>
                            </div>
                            </div>
        
                            </div>
        
                            </div>`
                            
              }
                   let amount = allProducts[j].price.match(/(\d+)/);
                   let amntafterdis = (amount[0] - discount(allProducts[j].price)).toFixed(2);
                   let finalamount = amntafterdis*occurance(cartlive,cartlive[i].pid);
                   
                document.getElementById('grandtotal').innerHTML +=
                        `<div class="finalamount border border-2 rounded-3 mt-5 ms-2 p-3 mb-4 shadow">
                        <h3 class="text-center">Product Total</h3>
                        <p>Maximum Retail Price :                                   ${allProducts[j].price}.00</p>
                        <p>Discount(10%) :                                          Rs.${discount(allProducts[j].price)}     </p>
                        <p>Tax Amount(12%) :                                        Rs.${tax(allProducts[j].price)}      </p>
                        <p>Amount :                                                  Rs.${amntafterdis}</p>
                        <p>Quantity : ${occurance(cartlive,cartlive[i].pid)} </p>
                        <hr>
                        <h6 style="color:darkred;font-weight:600;" class="text-end">Total :     Rs.${finalamount.toFixed(2)}</h6>
                        <a href="" class="btn btn-warning text-end">Place Order</a>
                        </div>`
                         ;
                         
              
              carttotal(finalamount,cartlive);
              
              

            }
            
          }
        
        
        };

    };

    
    
function removeproduct(pid) {

        let cartlive = JSON.parse(localStorage.getItem('cartlive'));
        
        for (i = 0; i < cartlive.length ; i++){
          if (pid === cartlive[i].pid){
           cartlive.splice(i,1);
            localStorage.setItem('cartlive',JSON.stringify(cartlive));
            document.getElementById('product-description').innerHTML = '';
            document.getElementById('grandtotal').innerHTML = '';
            addToCartJs();

            if (cartlive.length === 0){
              document.getElementById('product-description').innerHTML = `<h4 class="text-center m-3 ms-1 border col-12 p-4 rounded-3">Your cart is empty</h4>`;
            }
          }
        }
        
        document.getElementById('cart-btn').innerHTML = cartlive.length ;
        localStorage.removeItem('cartquantity') ;
        
}           
   


function occurance(cartlive,pid){
      let count = 0;
      cartlive.forEach((val) => (val.pid === pid && count++));
      return count;
}
          

function discount(mrp){
  let MRP = mrp.match(/(\d+)/);
  
  let discount = ((MRP[0]/100)*10).toFixed(2) ;
  return discount ;
  

}

function tax(mrp){
          let MRP = mrp.match(/(\d+)/);

          let tax = ((MRP[0]/100)*12).toFixed(2) ;
          return tax;
}
 


function carttotal(finalamount,cartlive){
        if (cartlive.length === 0){
          document.getElementById('carttotal').innerHTML = ``;
        }
        var finalamount1 = finalamount.toFixed(2);
        
        cartamnttotal.push(finalamount1);
        localStorage.setItem('cartamnttotal',JSON.stringify(cartamnttotal));
        
        let carttotalamount = JSON.parse(localStorage.getItem('cartamnttotal'));
        
        let sum = 0;
        carttotalamount.forEach((item)=>(sum += Number(item)));
        
        document.getElementById('carttotal').innerHTML = `<h5 class="bg-secondary text-white p-2">Your cart total is <span style="color:yellow;">Rs.${sum.toFixed(2)}</span><button class="btn btn-outline-warning float-end">Buy Together</button></h5>`;

}
       