let midproduct= document.querySelector(".mid");
// let filter= document.getElementById("")


let cart=[];
let main=[];

fetch("api/allproduct.json")
.then(res => res.json())
.then((res)=>{
    display(res);
    main= res
    // console.log(res);
})
.catch(error => console.log(error));

function display(data){
    midproduct.innerHTML="";
    data.forEach((product,index)=> {
        let card= document.createElement("div")
        let img= document.createElement("img")
        let price= document.createElement("h2")
        let title= document.createElement("h4")
        let category= document.createElement("p")
        let add= document.createElement("button")

        img.src= product.image
        price.textContent= "₹"+product.price
        title.textContent= product.title.substring(0,27)+" . ...";
        category.textContent= product.category
        add.textContent= "Add to Cart"
        add.addEventListener("click",()=>{
            if(checkDuplicate(product)){
                alert("Product Already in Cart")
              }else{
                cart.push({...product,quantity:1})
                localStorage.setItem("cart",JSON.stringify(cart));
                alert("Product Added To Cart");
              }
        })



        card.append(img,price,title,category,add);
        midproduct.append(card)
    });

    function checkDuplicate(product){
        for(let i=0;i<cart.length;i++){
          if(cart[i].id==product.id){
            return true
          }
        }
        return false
      }


}

let shop = document.getElementById("shop")
shop.addEventListener("click",()=>{
  display(main);
})

let bodylotion = document.getElementById("bodylotion")
bodylotion.addEventListener("click",()=>{
  let data = main.filter(ele => ele.category == "bodylotion");
  display(data);
})

let facepack = document.getElementById("facepack")
facepack.addEventListener("click",()=>{
  let data = main.filter(ele => ele.category == "facepack");
  display(data);
})

let clinsers = document.getElementById("clinsers")
clinsers.addEventListener("click",()=>{
  let data = main.filter(ele => ele.category == "clinsers");
  display(data);
})

let sampoo = document.getElementById("sampoo")
sampoo.addEventListener("click",()=>{
  let data = main.filter(ele => ele.category == "sampoo");
  display(data);
})

let nightcream = document.getElementById("nightcream")
nightcream.addEventListener("click",()=>{
  let data = main.filter(ele => ele.category == "nightcream");
  display(data);
})

let skincarekit = document.getElementById("skincarekit")
skincarekit.addEventListener("click",()=>{
  let data = main.filter(ele => ele.category == "skincarekit");
  display(data);
})
