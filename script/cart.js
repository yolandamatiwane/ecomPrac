let main = document.querySelector('main')
let cartDis = localStorage.getItem('purchasedItems')
let items = JSON.parse(localStorage.getItem('purchasedItems'))

items.forEach(item=>{
    main.innerHTML += `
                        <div>
                        <img src="${item.image}" alt="">
                        <p>${item.price}</p>
                        <button id="viewMore">View More</button>
                        <button id="purchase" value='${item.id}'>Purchase</button>
                        </div>
    
    
                    `
                   
})