
//mouseenter function and mouse leave function.While mouse enter image scales by 1.1 and backto previous when mouse leave.
function popingUp(e){
    document.getElementById(e).style.transform = 'scale(1.1)';
    document.getElementById(e).style.opacity = '0.7';
    document.getElementById(e).style.zIndex = '3';
}
function popingout(a){
    document.getElementById(a).style.transform = 'scale(1)';
    document.getElementById(a).style.opacity = '';
    document.getElementById(a).style.zIndex = '';
   
}


//Function of changing image at every 5 seconds.
setInterval(imgChange,5000);

const imgArrayFirstimg = [{img:'https://www.campusshoes.com/cdn/shop/files/CITY-RIDE_5G-627_M.GRY-LMN.jpg?v=1690478383&width=900',
                            name:'Campus CITY-RIDE',
                             p: "Grey Men's Sneakers",
                            Price: "Rs. 1,309.00"},
                {img:'https://www.campusshoes.com/cdn/shop/files/CITY-RIDE_5G-627_NAVY-ORG.jpg?v=1690218514&width=900',
                name:'Campus CITY-RIDE',
                 p:" Navy Men's Sneakers",
                Price: "Rs. 1,329.00"},
                {img:'https://www.campusshoes.com/cdn/shop/files/OG-D4_WHT-RED_1_6d714c24-1232-455a-9313-65c1cd42ddef.jpg?v=1695107390&width=900',
                name:'Campus OG-D4' , 
                p: "White Men's Sneakers",
                Price:"Rs. 979.00"},
                {img:'https://www.campusshoes.com/cdn/shop/files/EVEREST_11G-781_D.GRY-LMNGRN.jpg?v=1690218514&width=900',
                name:'Campus EVEREST',
                p:"Grey Men's Sneakers" ,
                Price: "Rs. 1,179.00"},
                {img:'https://www.campusshoes.com/cdn/shop/files/OG-D3_WHT-NAVY.jpg?v=1690478383&width=900',
                name:'Campus OG-D3', 
                p:"White Men Sneakers",
                Price:"Rs. 979.00"} ];

var i=1;

function imgChange(){
    
    while (i < imgArrayFirstimg.length){
        document.getElementById('firstimg').src = imgArrayFirstimg[i].img;
        document.querySelector('.card-footer').innerHTML = `<h3>${imgArrayFirstimg[i].name}</h3>
        <p>${imgArrayFirstimg[i].p}</p>
        <h2>${imgArrayFirstimg[i].Price}</h2>
        <a class="btn btn-warning" href="../Project1/collection.html">See More</a>`;

        if (i === 4){
            i = 0;
        }else{
            i++;
        };
        break;
    }
    
}