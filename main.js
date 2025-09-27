const loadcate = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((cate) => displaycate(cate.categories));
}



const displaycate = (categorie) => {
    const cateContainer = document.getElementById("cate-container");
    cateContainer.innerHTML = "";
    console.log(categorie);

    

    for(let part of categorie){
        const div1 = document.createElement("div");
        div1.innerHTML =`
        <button onclick="types(${part.id})" class="w-[250px] h-[40px] text-left focus:h-[35px] pl-[10px] focus:bg-[#15803D] focus:text-white text-[16px] ">${part.category_name} </button>
        `
        cateContainer.append(div1);
    }
}
loadcate();



const loadAll = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((response) => response.json())
    .then((allPlants) => displayAll(allPlants.plants));
};

const displayAll = (trees) => {
    const allContainer = document.getElementById("all-container");
    allContainer.innerHTML = "";
    console.log(trees);

    for(let tree of trees){
        const div2 = document.createElement("div");
        div2.innerHTML =`
        <div class="w-[343.33px] h-auto bg-white p-[16px] rounded-[8px]">
            <img src="${tree.image}" class="w-[311.33px] h-[186.8px] rounded-[8px] object-cover">

            <button onclick="details(${tree.id})"  class="btn text-[14px] text-[#18181B] font-bold mt-[12px] border-none bg-white name">${tree.name}</button>
            

            <p class="text-[12px] text-[#71717A] opacity-80 mt-[8px]">${tree.description}</p>
            <div class="flex justify-between mt-[8px]">
                <button class="w-auto px-[12px] h-[28px] rounded-[400px] bg-[#DCFCE7] text-[#15803D] text-[14px] font-semibold geist">${tree.category}</button>
                <h2 class="text-[14px] font-bold text-[#1F2937] price"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}</h2>
            </div>
            <button onclick="addCart(this)" id="cartBtn" class="w-[311.33px] h-[43px] text-center focus:h-[35px] pl-[10px] bg-[#15803D] font-semibold text-white text-[16px] rounded-[999px] px-[20px] mt-[12px]">Add to Cart</button>

        </div>
        `
        allContainer.append(div2);
    }
    

}
loadAll();


const details =(id)=>{
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((mod) => modals(mod.plants));
};

const modals = (detail) =>{
    console.log(detail);
    const modalbox = document.getElementById("details-container");
    modalbox.innerHTML=`
     <h3 class="text-2xl font-bold">${detail.name}</h3>
                    <img src="${detail.image}" class="w-[511.33px] h-[300.8px] rounded-[8px] object-cover">
                    <h2 class="text-xl font-semibold">Category:<span class="text-[16px] font-medium opacity-70"> ${detail.category}</span></h2>
                    <h2 class="text-xl font-semibold">Price:<span class="text-[16px] font-medium opacity-70"> ${detail.price}</span></h2>
                    <h2 class="text-xl font-semibold">Description:<span class="text-[16px] font-medium opacity-70"> ${detail.description}</span></h2>
                    <p class="py-4">This modal works with anchor links</p>

    `;  
    document.getElementById("my_modal_1").showModal();
}
details();

const details1 =(id)=>{
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((mod) => modals1(mod.plants));
};

const modals1 = (detail1) =>{
    console.log(detail1);
    const modalbox1 = document.getElementById("details-container");
    modalbox1.innerHTML=`
     <h3 class="text-2xl font-bold">${detail1.name}</h3>
                    <img src="${detail1.image}" class="w-[511.33px] h-[300.8px] rounded-[8px] object-cover">
                    <h2 class="text-xl font-semibold">Category:<span class="text-[16px] font-medium opacity-70"> ${detail1.category}</span></h2>
                    <h2 class="text-xl font-semibold">Price:<span class="text-[16px] font-medium opacity-70"> ${detail1.price}</span></h2>
                    <h2 class="text-xl font-semibold">Description:<span class="text-[16px] font-medium opacity-70"> ${detail1.description}</span></h2>
                    <p class="py-4">This modal works with anchor links</p>

    `;  
    document.getElementById("my_modal_1").showModal();
}
details1();

let cart =[];
let total = 0;

const addCart = (butt) =>{
    const parent =butt.parentNode;
    const name = parent.querySelector(".name").innerText;
    const price = Number(parent.children[3].querySelector(".price").innerText);
    console.log("add to cart clicked",name,price);
    const selected ={
        treeName: name,
        treePrice: price, 
    };
    cart.push(selected);
    displayCart(cart);

    total = total + price ;
    displayTotal(total);
};

const displayTotal =(val)=>{
    document.getElementById("total-cart").innerHTML= val;
}

const displayCart = (cart) =>{
    const cartBox = document.getElementById("cart");
    cartBox.innerHTML ="";

    for(let item of cart){
        const newItem  = document.createElement("div");
        newItem.innerHTML = `
        <div class="max-w-[220px] h-auto mx-auto  bg-[#f0f8f2] rounded-[8px] space-y-[10px] py-[10px] shadow-lg flex justify-between items-center">
            <div>
              <h2 class="tree-name">${item.treeName}</h2>
              <p><i class="fa-solid fa-bangladeshi-taka-sign"></i><span class="cost">${item.treePrice}</span> <i class="fa-solid fa-xmark"></i> 1</p>
            </div>
             <div><button onclick="removeCart(this)"><i class="fa-solid fa-xmark"></i></button></div> 
            </div>
        `;
        cartBox.append(newItem);
    };
};

const removeCart = (btn) =>{
    const items = btn.parentNode.parentNode;
    const item = items.children[0].children[0];
    const title = item.innerText;
    const price = Number(items.children[0].children[1].querySelector(".cost").innerText);
    console.log(price);

    cart = cart.filter((item) => item.treeName != title);
    displayCart(cart);
    total = total - price;
    displayTotal(total);
};



const types = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res)=>res.json())
    .then((type)=>ty_plants(type.plants));
};



const ty_plants = (elements) =>{

    document.getElementById("all-container").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");

    const typebox = document.getElementById("all-container");
    typebox.innerHTML = "";

    for(let element of elements){
        const div3 = document.createElement("div");
        div3.innerHTML =`
        <div class="w-[343.33px] h-auto bg-white p-[16px] rounded-[8px]">
            <img src="${element.image}" class="w-[311.33px] h-[186.8px] rounded-[8px] object-cover">

            <a onclick="details1(${element.id})" class="btn text-[14px] text-[#18181B] font-bold mt-[12px] border-none bg-white name">${element.name}</a>


            <p class="text-[12px] text-[#71717A] opacity-80 mt-[8px]">${element.description}</p>
            <div class="flex justify-between mt-[8px]">
                <button class="w-auto px-[12px] h-[28px] rounded-[400px] bg-[#DCFCE7] text-[#15803D] text-[14px] font-semibold geist">${element.category}</button>
                <h2 class="text-[14px] font-bold text-[#1F2937] price"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${element.price}</h2>
            </div>
            <button onclick="addCart(this)" id="cartBtn" class="w-[311.33px] h-[43px] text-center focus:h-[35px] pl-[10px] bg-[#15803D] font-semibold text-white text-[16px] rounded-[999px] px-[20px] mt-[12px]">Add to Cart</button>

        </div>
        `
        typebox.append(div3);
    };
    document.getElementById("all-container").classList.remove("hidden");
    document.getElementById("loading").classList.add("hidden");
};

