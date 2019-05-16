class Products {
    constructor(name,price,description,img){
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
    }
}

var nike = new Products("Nike", 100, "new-shoes","img/nike.png");
var adidas = new Products("Adidas", 120, "classic-shoes","img/adidas.png");
var puma = new Products("Puma",150,"new-shoes","img/puma.png");
var jordan = new Products("Jordan", 170, "outlet-shoes", "img/jordan.png");
var converse = new Products("Converse",70,"outlet-shoes","img/convrse.png")
var nikeAirMax = new Products("Nike Air Max", 200, "shoes","img/nikeAirMax.png");
var newBal = new Products("New Balance 990",179,"new-shoes","img/newBal.png")
var arrGoods = [nike,adidas,puma,jordan,nikeAirMax,converse,newBal];

function addGoods(item){
    for (let i = 0; i<arrGoods.length; i++){
            document.getElementById("products").innerHTML += `<div class="info-goods">
            <div class="img"><img src=${item[i].img}></div>
            <div class="name">${item[i].name}</div>
            <div class="price">${item[i].price}</div>
            <div class="description">${item[i].description}</div>
           </div>`
        }
}

addGoods(arrGoods);

function sortByPrise() {
    var div = document.querySelector("#products");
    if (div){
        div.innerHTML = '';
        PriseSort(arrGoods);
        addGoods(arrGoods);
    };
    
}


function sortByName() {
    var div = document.querySelector("#products");
    if (div){
        div.innerHTML = '';
        nameSort(arrGoods);
        addGoods(arrGoods);
    };
}
// сортувальні функції..
function PriseSort(arr){
    arr.sort(function(a,b){
        return a.price - b.price;
    });
};

function nameSort(arr){
    arr.sort(function(a,b){
        if(a.name > b.name){
            return 1;
        }
        if (a.name < b.name){
            return -1;
        }
        return 0;
    });
};
