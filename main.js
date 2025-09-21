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
        <button class="w-[250px] h-[40px] text-left focus:h-[35px] pl-[10px] focus:bg-[#15803D] focus:text-white text-[16px] ">${part.category_name} </button>
        `
        cateContainer.append(div1);
    }
}
loadcate();


const loadAll = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((response) => response.json())
    .then((allPlants) => displayAll(allPlants.plants));
}

const displayAll = (trees) => {
    const allContainer = document.getElementById("all-container");
    allContainer.innerHTML = "";
    console.log(trees);

    for(let tree of trees){
        const div2 = document.createElement("div");
        div2.innerHTML =`
        <div class="w-[343.33px] h-auto bg-white p-[16px] rounded-[8px]">
            <img src="${tree.image}" class="w-[311.33px] h-[186.8px] rounded-[8px]">
            <h3 class="text-[14px] text-[#18181B] font-bold mt-[12px]">${tree.name}</h3>
            <p class="text-[12px] text-[#71717A] opacity-80 mt-[8px]">${tree.description}</p>
            <div class="flex justify-between mt-[8px]">
                <button class="w-auto px-[12px] h-[28px] rounded-[400px] bg-[#DCFCE7] text-[#15803D] text-[14px] font-semibold geist">${tree.category}</button>
                <h2 class="text-[14px] font-bold text-[#1F2937]"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}</h2>
            </div>
            <button class="w-[311.33px] h-[43px] text-center focus:h-[35px] pl-[10px] bg-[#15803D] font-semibold text-white text-[16px] rounded-[999px] px-[20px] mt-[12px]">Add to Cart </button>
        </div>
        
        `
        allContainer.append(div2);
    }
}
loadAll();