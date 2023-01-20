let newarr= document.querySelector(".newArr");

fetch("api/newarr.json")
.then(res =>res.json())
.then((res)=>{
    // console.log(res);
    displayArr(res)
})
.catch(error=>console.log(error))

function displayArr(data){
    newarr.innerHTML="";
    data.forEach(element => {
        let datacard = document.createElement("div");
        let img= document.createElement("img");
        let title= document.createElement("h4");
        let price= document.createElement("h2");
        let category= document.createElement("h5");

        img.src= element.image;
        title.textContent= element.title;
        price.textContent= "₹"+element.price;
        category.textContent= element.category;

        datacard.append(img,price,title,category)
        newarr.append(datacard)
    });
}