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



const addCartArray = [];

 function addToCart(pid){
    
        let cartsize = Number(document.getElementById('cart-btn').innerText);
        document.getElementById('cart-btn').innerHTML = cartsize + 1 ;
        let cartquantity = cartsize + 1 ;
        localStorage.setItem('cartquantity',JSON.stringify(cartquantity));


        addCartArray.push({pid:pid});

        localStorage.setItem('cartlive',JSON.stringify(addCartArray));
    
        
} 


function productoverview(pid){

        for (var i = 0 ; i < allProducts.length ; i++){
                if (pid === allProducts[i].pid){
                        document.getElementById('staticBackdropLabel').innerHTML = `${allProducts[i].name}`;
                        document.getElementById('productoverviewimg').src = `${allProducts[i].img}` ;
                        document.getElementById('modalFooter').innerHTML = `<h3 id="productprice" class="text-start"></h3><button type="button" class="btn btn-warning" id="addToCartproductOverview" onclick="addToCart('${pid}')" >Add to cart</button>` ;
                        document.getElementById('productprice').innerHTML = `${allProducts[i].price}` ;
                }
        }
        
        
}