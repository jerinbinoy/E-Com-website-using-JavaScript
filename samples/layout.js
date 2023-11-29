
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
setInterval(imgChange1,5000);
//setInterval(imgChange2,5000);

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

function imgChange1(){
    
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



/*const imgArraysecondimg = [{img:'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/12/26231806/Untitled-design-6-1600x900.png',
                            },
                {img:'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2019-09/shoee.jpg',
                },
                {img:'https://kenresearchreport.files.wordpress.com/2020/07/leather-and-footwear-market.png?w=900',
                },
                {img:'https://www.salomon.com/sites/default/files/2021-03/Teaser-how-to-recycle-your-running-shoes-landscape.jpg',
                },
                {img:'https://sneakerbardetroit.com/wp-content/uploads/2023/11/Harry-Potter-Reebok-Collection.jpg',
                } ];


var j=1;

function imgChange2(){
    
    while (j < imgArraysecondimg.length){
        document.getElementById('secndimg').src = imgArraysecondimg[j].img;
        document.querySelector('.card-footer').innerHTML = `<h3>${imgArrayFirstimg[j].name}</h3>
        <p>${imgArrayFirstimg[j].p}</p>
        <h2>${imgArrayFirstimg[j].Price}</h2>
        <a class="btn btn-warning" href="../Project1/collection.html">See More</a>`;

        if (j === 4){
            j = 0;
        }else{
            j++;
        };
        break;
    }
    
}
*/
