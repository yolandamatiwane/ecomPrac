let main = document.querySelector('main')

function createItem(id,name,category,image,descrption,quantity,price){
    this.id = id
    this.name = name
    this.category = category
    this.image = image
    this.descrption = descrption
    this.quantity = quantity
    this.price = price
}

let item_1 = new createItem(1,'OP T-shirt','clothing','https://nocturnalsunshine.co.za/cdn/shop/files/Artboard4_8408c7c7-4927-4ed6-8e1b-bb16ac0e4854.png?v=1701423962&width=823','Bravely follow one of the strongest swordsmen in One Piece and embark on an incredible adventure! This stylish Roronoa Zoro tee is made from 100% combed cotton and features classic Japanese art fused with anime for a stunning look. Enjoy a voyage filled with excitement and risk-taking!',1,600)
let item_2= new createItem(2,'jjk hoodie','clothing','https://www.theengraveslave.co.za/wp-content/uploads/2021/06/Anime-Hoodie-%E2%80%93-Jujutsu-Kaisen-Gojo-Satoru-%E2%80%93-Sky-Blue-Front.png','This hoodie is made from scratch. Locally knitted fleece and then stitched by hand with our stunning PRINT! It can take 4 to 8 weeks for this order as they are produced on order and we have moved to a new printer which means that things may take a bit longer. Our top priority is quality as we want to give you the best.',1,950)
let item_3 = new createItem(3,'MHA','cup','https://goldendiscs.ie/cdn/shop/files/6154lbwbYeL._AC_SX522_540x@2x.jpg?v=1691139927','This is a cup for My Hero fans',1,250.99)
let item_4 = new createItem(4,'Midoriya','action figure','https://media.takealot.com/covers_images/a1408b6dd42c4eb9b7b0f0b7f1a4889c/s-zoom.file','Izuku is back in the SFC range with this new model! Find the greatest hero in the making in action with his signature attack.',1,779)
let item_5 = new createItem(5,'AOT','keychain','https://images-cdn.ubuy.co.in/63700fbd9acd4532c31faa93-gtotd-attack-on-titan-keychain-with.jpg','Wings of Freedom Anime Keychain with Pins Badges and Necklace Pendant Decor. Gifts Anime Merch Decor for Anime Party Supplies Fans',1,300)

let items = [item_1,item_2,item_3,item_4,item_5]

localStorage.setItem('items',JSON.stringify(items))
let purchasedItems = []

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
let purchasedBtn = document.querySelectorAll('#purchase')
                    
// for (let i = 0; i < purchasedBtn.length; i++) {
//     purchasedBtn[i].addEventListener('click',()=>{
//         if(purchasedBtn[i].value ==`${items[i].id}`){
//             let item = items[i]
//         }
//     })
// }
function addToCart(id){
    let [item] = items.filter(object=> object.id === +id)
    purchasedItems.push(item)
    localStorage.setItem("purchasedItems",JSON.stringify(item))
}
purchasedBtn.forEach(button=>{
    button.addEventListener('click',(event)=>{
        addToCart(event.target.value)
    })
})


// btn.forEach(but =>{
//     but.addEventListener('click',()=>{
//         item
//     })
// })


// function clicked(){
   
// }

//when purchase is clicked, add to an array // add to cart