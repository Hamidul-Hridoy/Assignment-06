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