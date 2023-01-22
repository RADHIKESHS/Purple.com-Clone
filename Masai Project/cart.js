
let cartdata= JSON.parse(localStorage.getItem("cart"))||[];
// console.log(cartdata)
let cartEl= document.getElementById("cart-container");
let carttotal= document.getElementById("cart-total");


display(cartdata)
function display(data){
    cartEl.innerHTML="";
    data.forEach((product,index)=> {
        let card= document.createElement("div")
        let img= document.createElement("img")
        let price= document.createElement("h2")
        let title= document.createElement("h4")
        let category= document.createElement("p")
        let remove= document.createElement("button")
        let Increment= document.createElement("button");
        let quantity= document.createElement("span")
        let Decrement= document.createElement("button");

        img.src= product.image
        price.textContent= "₹"+product.price
        title.textContent= product.title.substring(0,27)+" . ...";
        category.textContent= product.category
        remove.textContent= "Delete"
        Increment.textContent="+";
        Decrement.textContent="-";
        quantity.textContent= +(product.quantity);

        remove.addEventListener("click",()=>{
            data = data.filter((ele)=>{
                return ele.id !== product.id;
            })
            localStorage.setItem("cart",JSON.stringify(data));
            window.location.reload();
        })
        Increment.addEventListener("click",()=>{
            product= +(product.quantity)++;
            localStorage.setItem("cart",JSON.stringify(data));
            display(data);
        })
        Decrement.addEventListener("click",()=>{
            if(+(product.quantity)>1){
                product= +(product.quantity)--;
                localStorage.setItem("cart",JSON.stringify(data));
                display(data);
            }
        })

        card.append(img,price,title,category,Increment,quantity,Decrement,remove);
        cartEl.append(card)
    });

    let sum=0;
    for(let i=0;i<cartdata.length;i++){
        sum+= +cartdata[i].price * (+cartdata[i].quantity)
    }
    carttotal.textContent= sum;
}