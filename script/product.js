// const loadAllCategory = async()=>{
//     const url = await fetch("https://fakestoreapi.com/products/categories")
//     const res = await url.json()
//     displayAllCategory(res)
// }
// const loadSpecificCaregory = async (rechiveCategory) =>{
//     const url = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(rechiveCategory)}`);
//     const res = await url.json()
//     displaySpecificCategory(res)
// }

// const displaySpecificCategory = (result) =>{
//     const productContainer = document.getElementById("card-container")
//     productContainer.innerHTML ="";
//     result.forEach((singleProduct)=>{
//         const card = document.createElement("div")
//         card.innerHTML = `
//         <div class="shadow-md rounded-xl border border-gray-300">
//       <div class=" bg-gray-300 flex justify-center items-center rounded-t-md">
//         <img class="w-60 h-60 p-10" src="${singleProduct.image}" alt="">
//       </div>
//       <!-- 2nd child -->
//       <div class="p-4 space-y-2">
//       <div class="flex justify-between">
//         <h5 class=" bg-blue-100 text-blue-700 rounded-full px-3 text-sm">${singleProduct.category}</h5>
//         <p class="text-gray-500"><i class="fa-regular fa-star text-orange-400"></i>${singleProduct.rating.rate}(${singleProduct.rating.count})</p>
//       </div>
//       <h1 class="text-xl font-semibold truncate">${singleProduct.title}</h1>
//       <h5 class="text-xl font-bold">${singleProduct.price}</h5>
//       <div class="flex justify-between">
//         <button class="btn btn-outline btn-primary sm:btn-sm"><i class="fa-regular fa-eye"></i> Details</button>
//         <button class="btn btn-primary sm:btn-sm"><i class="fa-solid fa-cart-plus"></i> Add to cart</button>
//       </div>
//       </div>
//      </div>
   
//         `
//         productContainer.append(card)
//         console.log(singleProduct)
//     })
//     // console.log(result)
// }

// const displayAllCategory = (category) =>{
//     const categoryContainer =document.getElementById("catagory-container")
//     category.forEach((singleCategory) =>{
//         const categoryButton =document.createElement("div")
//         categoryButton.innerHTML =`
//         <button onclick="loadSpecificCaregory('${(singleCategory)}')"
//         class="border border-indigo-900 rounded-full px-6 py-2 text-indigo-800 text-base font-bold capitalize cursor-pointer">
//         ${singleCategory}
//      </button>
//         `
//         categoryContainer.appendChild(categoryButton)
//         console.log(singleCategory)
//     })
//     console.log(category)
// }
// loadAllCategory();










const loadAllCategory = async()=>{
    const url = await fetch("https://fakestoreapi.com/products/categories")
    const res = await url.json()
    displayAllCategory(res)
}
const loadSpecificCaregory = async (rechiveCategory) =>{
    const url = await fetch(`https://fakestoreapi.com/products/category/${rechiveCategory}`);
    const res = await url.json()
    displaySpecificCategory(res)
}

const displaySpecificCategory = (result) =>{
    const productContainer = document.getElementById("card-container")
    productContainer.innerHTML ="";
    result.forEach((singleProduct)=>{
        const card = document.createElement("div")
        card.innerHTML = `
        <div class="shadow-md rounded-xl border border-gray-300">
      <div class=" bg-gray-300 flex justify-center items-center rounded-t-md">
        <img class="w-60 h-60 p-10" src="${singleProduct.image}" alt="">
      </div>
      <!-- 2nd child -->
      <div class="p-4 space-y-2">
      <div class="flex justify-between">
        <h5 class=" bg-blue-100 text-blue-700 rounded-full px-3 text-sm">${singleProduct.category}</h5>
        <p class="text-gray-500"><i class="fa-regular fa-star text-orange-400"></i>${singleProduct.rating.rate}(${singleProduct.rating.count})</p>
      </div>
      <h1 class="text-xl font-semibold truncate">${singleProduct.title}</h1>
      <h5 class="text-xl font-bold">${singleProduct.price}</h5>
      <div class="flex justify-between">
        <button class="btn btn-outline btn-primary sm:btn-sm"><i class="fa-regular fa-eye"></i> Details</button>
        <button class="btn btn-primary sm:btn-sm"><i class="fa-solid fa-cart-plus"></i> Add to cart</button>
      </div>
      </div>
     </div>
   
        `
        productContainer.append(card)
        console.log(singleProduct)
    })
    // console.log(result)
}

// const displayAllCategory = (category) =>{
//     const categoryContainer =document.getElementById("catagory-container")
//     category.forEach((singleCategory) =>{
//         const categoryButton =document.createElement("div")
//         categoryButton.innerHTML =`
//         <button onclick="loadSpecificCaregory('${singleCategory}')"
//         class="border border-indigo-900 rounded-full px-6 py-2 text-indigo-800 text-base font-bold capitalize cursor-pointer">
//         ${singleCategory}
//      </button>
//         `
//         categoryContainer.appendChild(categoryButton)
//         console.log(singleCategory)
//     })
//     console.log(category)
// }

const displayAllCategory = (categories) => {
    const categoryContainer = document.getElementById("catagory-container")
    categories.forEach((singleCategory) => {
        const btn = document.createElement("button")
        btn.textContent = singleCategory
        btn.className = "border border-indigo-900 rounded-full px-6 py-2 text-indigo-800 text-base font-bold capitalize cursor-pointer"
        btn.addEventListener("click", () => loadSpecificCaregory(singleCategory))
        categoryContainer.appendChild(btn)
    })
}

loadAllCategory();