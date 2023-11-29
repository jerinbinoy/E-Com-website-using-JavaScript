//Allproducts listed as objects in the array and each product have unique product id. pid means product id.
const allProducts = [
                                      //trending collection       
                                      {pid:'lksdkjfiq6478',
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
                                      price:'Rs.899'},
                  
                  
                                      //mens collection
                                      {pid:'iuebviyiru92746298hiufh',
                                       name:`SD-054 Blue Men's Outdoor Sandal`,
                                       img:`https://www.campusshoes.com/cdn/shop/products/3K-SD-054-G-RSLATE-NAVY-RED_2.jpg?v=1670326151&width=900`,
                                       price:'Rs. 699.00'},
                                       {pid:'iywgboaihg82645hagf',
                                       img:`https://www.campusshoes.com/cdn/shop/products/2GC-01-NAVY-MSTD_2.jpg?v=1697116377&width=900`,
                                       name:`2GC-01 Men's Outdoor Sandal`,
                                       price:'Rs. 799.00'},
                                       {pid:'wefgquon496verb9',
                                        name:`XPERIA-2 Grey Men's Sandals`,
                                       img:`https://www.campusshoes.com/cdn/shop/products/3K-561A-G-DGRY-LGRY-LMN-2.jpg?v=1670325883&width=720`,
                                       price:'Rs. 799.00'},
                                       {pid:'qr748giuif97928qgff',
                                        img:`https://www.campusshoes.com/cdn/shop/products/3K-SD-054_BLKDGRYRED-4_1c3e6cbd-56ef-4d02-a806-77094665c127.jpg?v=1670325892&width=900`,
                                        name:`SD-054 Black Men's Sandals`,
                                       price:'Rs. 699.00'},
                                       {pid:'ow8y4rhb87s2te7e',
                                       img:`https://www.campusshoes.com/cdn/shop/products/2GC-03-G-NAVY-BRIGHTORG_2.jpg?v=1670326068&width=720v`,
                                       name:`2GC-03 Men's Outdoor Sandal`,
                                       price:'Rs. 799.00'},
                                       {pid:'875ythujdsgkufiq9yre',
                                       img:`https://www.campusshoes.com/cdn/shop/products/XPERIA-2_3K-561A_BRN-ORG_2.jpg?v=1670325890&width=720`,
                                       name:`XPERIA-2 Brown Men's Sandals`,
                                       price:'Rs. 799.00'},
                                       {pid:'oirhoeuqnure874g68d',
                                       img:`https://www.campusshoes.com/cdn/shop/products/2GC-01-BLK-L.GRY_2.jpg?v=1697116354&width=720`,
                                       name:`2GC-01 Men's Outdoor Sandal`,
                                       price:'Rs. 799.00'},
                                       {pid:'2hf79485h08gw4',
                                       img:`https://www.campusshoes.com/cdn/shop/products/3K-908_MHDBEIGE-4.jpg?v=1670326135&width=720`,
                                       name:`3K-908 Men's Outdoor Sandal`,
                                       price:'Rs. 699.00'},
                                       {pid:'w489yf9hoho4yr',
                                       img:`https://www.campusshoes.com/cdn/shop/products/JOYPRO-GC-980-BLU-ORG_2.jpg?v=1670326602&width=720`,
                                       name:`JOY (N) Blue Men's Sandals`,
                                       price:'Rs. 849.00'
                                       },
                                       {pid:'fjjbu9347gb9f3',
                                       img:`https://www.campusshoes.com/cdn/shop/products/3K-SD-PF016-G-NAVY-SKY_2.jpg?v=1670325883&width=720`,
                                       name:`SD-PF016 Navy Men's Sandals`,
                                       price:'Rs. 999.00'},
                  
                  
                                       //ladies collection
                                       {pid:'43fgiuhdjfanubfag',
                                       img:`https://www.campusshoes.com/cdn/shop/files/SD-062MauveOffWht.jpg?v=1695907184&width=720`,
                                        name:`SD-062 Pink Women's Sandals`,
                                       price:'Rs. 649.00'},
                                       {pid:'nvwurh3498gw7s9',
                                       img:`https://www.campusshoes.com/cdn/shop/products/SD-062-ORG-CRM_2.jpg?v=1670326008&width=900`,
                                       name:`SD-062 Orange Women's Sandals`,
                                       price:'Rs. 649.00'},
                                       {pid:'n9w4gfvob9wyrfw',
                                       img:`https://www.campusshoes.com/cdn/shop/files/SD-062SeaGreenwhite.jpg?v=1695907117&width=720`,
                                        name:`SD-062 Blue Women's Sandals`,
                                        price:'Rs. 649.00'},
                                        {pid:'fh2486tgfhw809e8fh',
                                        img:`https://www.campusshoes.com/cdn/shop/files/3K-SD-061-GRY-BLK-RANI_2.jpg?v=1687885997&width=720`,
                                        name:`SD-061 Grey Women's Sandals`,
                                        price:'Rs. 699.00'},
                                        {pid:'nwi47934775hf927d',
                                        img:`https://www.campusshoes.com/cdn/shop/products/GC-220L_GC-2220L_D.GRY-PEACH_2.jpg?v=1670325920&width=720`,
                                        name:`GC-2220L Grey Women's Sandals`,
                                        price:'Rs. 849.00'},
                                        {pid:'0284yfh20h8fgw9',
                                        img:`https://www.campusshoes.com/cdn/shop/files/SD-062BLK-BABYPINK.jpg?v=1695907150&width=720`,
                                        name:`SD-062 Black Women's Sandals`,
                                        price:'Rs. 649.00'},
                                        {pid:'92rfbsakurh4gfsr3',
                                        img:`https://www.campusshoes.com/cdn/shop/products/GC-220L_GC-2220L_NLK-OF.WHT_2.jpg?v=1670325941&width=720`,
                                        name:`GC-2220L Black Women's Sandals`,
                                        price:'Rs. 849.00'},
                                        {pid:'wvs9fho4ith79gf9346g',
                                        img:`https://www.campusshoes.com/cdn/shop/files/GC-22112L_GC-22112L_BT.GRN-S.GRN_2.jpg?v=1700716327&width=900`,
                                        name:`GC-22112L Green Women's Sandal`,
                                        price:'Rs. 899.00'},
                                        {pid:'rtyiuu4tyh9347gb',
                                        img:`https://www.campusshoes.com/cdn/shop/products/GC-2220L_GC-2220L_BLK-RED_2.jpg?v=1670325914&width=720`,
                                        name:`GC-2220L Black Women's Sandals`,
                                        price:'Rs. 849.00'},
                                        {pid:'gvb934ywiurh248ga6329',
                                        img:`https://www.campusshoes.com/cdn/shop/products/SD-062-NAVY-PEACH_2.jpg?v=1670326007&width=900`,
                                        name:`SD-062 Navy Women's Sandals`,
                                        price:'Rs. 649.00'},
                  
                                        
                                        //kids collection
                                        {pid:'bmitojhmwbnnwbnwiugr724',
                                        img:`https://www.campusshoes.com/cdn/shop/files/GC-22929_GC-22929_RED-BLK_2_360x.jpg?v=1687885995`,
                                        name:`GC-22929 Red Kid's Sandals`,
                                        price:'Rs. 699.00'},
                                        {pid:'ofiw83y9r8ghq98qyhogiqoiogugtfu',
                                        img:`https://www.campusshoes.com/cdn/shop/files/GC-22142K_GC-22142K_S.GRN-BLK_2.jpg?v=1692897332&width=720v`,
                                        name:`GC-22142K Green Kids Sandals`,
                                        price:'Rs. 699.00'},
                                        {pid:'ifnq398qy9fghboaiskhf39q7gufoasih',
                                        img:`https://www.campusshoes.com/cdn/shop/products/GC-22927K_GC-22927K_GRY-BLU_2_4f424076-45ed-4b9d-9494-565fbe49b2c2.jpg?v=1670326031&width=900`,
                                        name:`GC-22927K Grey Kid's Sandals`,
                                        price:'Rs. 699.00'},
                                        {pid:'nogqihowt90ghiuaoghoubvad',
                                        img:`https://www.campusshoes.com/cdn/shop/products/GCK-3002_GCK-3002_BLU_1.jpg?v=1670325532&width=900`,
                                        name:`GCK-3002 Blue Kids Flip Flops`,
                                        price:'Rs. 275.00'},
                                        {pid:'KLJOVILABOIHORINLIOhoguegh',
                                        img:`https://www.campusshoes.com/cdn/shop/products/GCK-3003_GCK-3003_BLK_1.jpg?v=1670325557&width=720`,
                                        name:`GCK-3003 Black Kids Flip Flops`,
                                        price:'Rs. 275.00'},
                                        {pid:'9348ythoiaoi4397q9h',
                                        img:`https://www.campusshoes.com/cdn/shop/files/DRS-210_DRS-210_SKY-F.GRN_2.jpg?v=1699254157&width=720`,
                                        name:`DRS-210 Sky Kid's Sandal`,
                                        price:'Rs. 549.00'},
                                        {pid:'0805369hg080a8e9ew797g',
                                        img:`https://www.campusshoes.com/cdn/shop/products/SL-524_SL-524_ICEGRN-RED_2.jpg?v=1673152886&width=720`,
                                        name:`SL-524 Blue Kids Sandal`,
                                        price:'Rs. 549.00'},
                                        {pid:'fq3847375958th989f8h3a',
                                        img:`https://www.campusshoes.com/cdn/shop/products/NT-561_NT-561_ICEGRN-V.ORG_2.jpg?v=1670325372&width=900`,
                                        name:`NT-561 Green Kids Running Shoes`,
                                        price:'Rs. 699.00'},
                                        {pid:'fq034858t0856th2io6rg',
                                        img:`https://www.campusshoes.com/cdn/shop/products/NT-561_NT-561_MOD.BLU-BLK_2.jpg?v=1670325373&width=1080`,
                                        name:`NT-561 Blue Kids Running Shoes`,
                                        price:'Rs. 699.00'},
                                        {pid:'vgn3o5896983hg98wo8h4g',
                                        img:`https://www.campusshoes.com/cdn/shop/products/NINZA-JR-6C-570-MHRN-SIL_2.jpg?v=1670325632&width=720`,
                                        name:`NINZA JR Maroon Child Running Shoes`,
                                        price:'Rs. 999.00'}
                  
                                              ];
                                    

let cartamnttotal = [] ;
                                   
//Onload function which shows the quantity in the cart
window.onload = function cartQuantity(){
   
  let cartQuantity = JSON.parse(localStorage.getItem('cartquantity'));
   
        if (cartQuantity === null){
            
            document.getElementById('cart-btn').innerHTML = 0 ;
        }else{
          document.getElementById('cart-btn').innerHTML = cartQuantity ;
        }
};

//The function of addtocartjs will be called always when the page loads
addToCartJs();
//When this function will be called, the cart will be updated its number and product will be listed.
function  addToCartJs(){
  //live cart is taken from local storage.
    let cartlive = JSON.parse(localStorage.getItem('cartlive'));
    //Product id will be extracted from cartlive
    let pids = cartlive.map(function(item){return item['pid']});
    //Repeated productids will be filtered and stored in new array
    let filteredcartlive = pids.filter((pid,index) =>pids.indexOf(pid) === index );
    
    
 //Product ids are looped.  
    for ( let i = 0; i < filteredcartlive.length; i++){
//Allproducts are looped.
          for ( let j = 0 ; j < allProducts.length ; j++ ){
          //The product id received from user checked with the array of allproducts and proceed if they match.  
           if (filteredcartlive[i] === allProducts[j].pid){
            //The emptycart message will be disabled.
             let emptycart = document.getElementById('emptycart');
             emptycart.style.display = 'none';
            //The MRP rate of product is extracted and discount function and amount after discount function is called.
              let amount = allProducts[j].price.match(/(\d+)/);
              let amntafterdis = (amount[0] - discount(allProducts[j].price)).toFixed(2); 
              let finalamount = amntafterdis*occurance(cartlive,filteredcartlive[i]);
            //If the emptycart message is disabled 
              if (emptycart.style.display === 'none'){
                //The matching product will be listed here using the values taken from the all products array.Rate of the product also calculated and placed respectively.
                document.getElementById('product-description').innerHTML += `
                        
                            <div class="productdetails col-12  mt-5  rounded-3 border  border-2 p-3 mb-4 shadow " id="productdetails">
                            <h3 class="text-center ">Product Details</h3>
                            <div id="productlist" class="d-flex">


                            <div class="d-flex productdescription border rounded p-3 col-12 col-md-6" id="product">
                            <div class="col-6">
                              <img src="${allProducts[j].img}" alt="" class="img-fluid rounded-3 shadow ">
                            </div>
                            <div class="col-6 ms-3 mt-3" >
                              <h4>${allProducts[j].name}</h4>
                              <p>It is a most selling shoes from a renowned brand. </p>
                              <h5>${allProducts[j].price}</h5><br>
                              <h6>Quantity:  <select><option>${occurance(cartlive,filteredcartlive[i])}</option></select></h6><br><br>
                              <button class="btn btn-danger" onclick="removeproduct('${allProducts[j].pid}')">Remove Product</button>
                            </div>
                            </div>


                            <div class="finalamount border col-12 col-md-6 rounded-3  ms-2 p-3 ">
                                <h3 class="text-center">Product Total</h3>
                                <p>Maximum Retail Price :                             <span class="float-end"> ${allProducts[j].price}.00</span></p>
                                <p>Discount(10%) :                                    <span class="float-end">Rs.${discount(allProducts[j].price)}  </span>   </p>
                                <p>Tax Amount(12%) :                                  <span class="float-end">Rs.${tax(allProducts[j].price)}   </span>   </p>
                                <p>Amount :                                           <span class="float-end">Rs.${amntafterdis}</span></p>
                                <p>Quantity : <span class="float-end">${occurance(cartlive,filteredcartlive[i])} </span></p>
                                <hr>
                                <h6 style="color:darkred;font-weight:600;" class="text-end">Total :     Rs.${finalamount.toFixed(2)}</h6><br><br>
                                <button href="" class="btn btn-warning float-end" onclick="orderalert()">Place Order</button>
                            </div>
        
                            </div>
        
                            </div>`
                            
              }
             //carttotal is a function which calculates the sum of the products in the cart with their quantity.
             carttotal(finalamount,cartlive);

            }
            
          }
        
          
        };

    };
//If the place order button is clicked the  alert will be showed.
function orderalert(){

          document.getElementById('alertsection').innerHTML = `<div class="alert alert-dismissible alert-success d-flex align-items-center" role="alert">
                                                      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                                                      <div>
                                                        Your order placed successfully.
                                                      </div>
                                                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                    </div>`;

            window.alert('Order placed succesfully.');                                        
}    
//If the remove product button is clicked the entire product will be removed from the cart.    
function removeproduct(pid) {

        let cartlive = JSON.parse(localStorage.getItem('cartlive'));
        cartamnttotal = [] ;
        
        //cartlive is looped and find the pid is matching with the local storage and splice it from local storage and update it.
        for (i = 0; i < cartlive.length ; i++){
          if (pid === cartlive[i].pid){
            let occured = occurance(cartlive,pid);
           cartlive.splice(i,occured);

            localStorage.setItem('cartlive',JSON.stringify(cartlive));
            
            document.getElementById('product-description').innerHTML = '';
            
            addToCartJs();

            if (cartlive.length === 0){
              document.getElementById('emptycart').style.display = 'block';
              document.getElementById('carttotal').innerHTML = ``;
            }
          }
          
        }
        //The cart and local storage will be updated
        document.getElementById('cart-btn').innerHTML = cartlive.length ;
        localStorage.removeItem('cartquantity') ;
        window.alert(`Successfully removed the product`);
        
}           
   

//This function returns the quantity of the product from the occurance of the user clicked the add cart button.
function occurance(cartlive,pid){
      let count = 0;
      cartlive.forEach((val) => (val.pid === pid && count++));
      return count;
}
          
//THis function returns the discount of the product calculated from MRP
function discount(mrp){
  let MRP = mrp.match(/(\d+)/);
  
  let discount = ((MRP[0]/100)*10).toFixed(2) ;
  return discount ;
 
}

//This function returns the tax amount of the product from the MRP
function tax(mrp){
          let MRP = mrp.match(/(\d+)/);

          let tax = ((MRP[0]/100)*12).toFixed(2) ;
          return tax;
}

//This function calculates the sum of all products in the cart. And will be displayed at the top.
function carttotal(finalamount,cartlive){
        if (cartlive.length === 0){
          document.getElementById('carttotal').innerHTML = ``;
        }
        var finalamount1 = finalamount.toFixed(2);
        
        cartamnttotal.push(finalamount1);
        
        let sum = 0;
        cartamnttotal.forEach((item)=>(sum += Number(item)));
        document.getElementById('carttotal').innerHTML = `<h5 class="bg-secondary text-white p-2">Your cart total is <span style="color:yellow;">Rs.${sum.toFixed(2)}</span><button class="btn btn-outline-warning float-end">Buy Together</button></h5>`;

}
       