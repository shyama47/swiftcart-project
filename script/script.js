const loadAllProduct =async() =>{
const url =await fetch("https://fakestoreapi.com/products")
const result = await url.json()
displayLoadAllProduct(result)
}

const displayLoadAllProduct = (data) =>{
  const highrated = data.slice(0,3)
    const productContainer =document.getElementById("product-container")
    productContainer.innerHTML="";
    highrated.forEach((singleData) =>{
    const productCard = document.createElement("div");
    productCard.innerHTML = `
    
     <div class="shadow-md rounded-xl border border-gray-300">
      <div class=" bg-gray-300 flex justify-center items-center rounded-t-md">
        <img class="w-60 h-60 p-10" src="${singleData.image}" alt="">
      </div>
      <!-- 2nd child -->
      <div class="p-4 space-y-2">
      <div class="flex justify-between">
        <h5 class=" bg-blue-100 text-blue-700 rounded-full px-3 text-sm">${singleData.category}</h5>
        <p class="text-gray-500"><i class="fa-regular fa-star text-orange-400"></i>${singleData.rating.rate}(${singleData.rating.count})</p>
      </div>
      <h1 class="text-xl font-semibold truncate">${singleData.title}</h1>
      <h5 class="text-xl font-bold">${singleData.price}</h5>
      <div class="flex justify-between">
        <button class="btn btn-outline btn-primary sm:btn-sm"><i class="fa-regular fa-eye"></i> Details</button>
        <button class="btn btn-primary sm:btn-sm"><i class="fa-solid fa-cart-plus"></i> Add to cart</button>
      </div>
      </div>
     </div>
   
    `
    productContainer.append(productCard)
    console.log(singleData)
})
}
loadAllProduct()
