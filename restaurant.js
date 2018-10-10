

let ulLists = document.getElementById('ulLists')


for(let index = 0; index < menuItems.length; index++) {
  let itemsOfMenu = menuItems[index]
  let title = itemsOfMenu.title
  let image = itemsOfMenu.imageURL
  let description = itemsOfMenu.description
  let priceButton = itemsOfMenu.price
  let course = itemsOfMenu.course

  let menuList = `
  <li id="images">
  <img src="${image}" />
  <label><strong>${title}</strong>
  <p>${description}</p> </label>
  <div id="buttonDiv">
  <button id="PriceTab">Price:$${priceButton}</button> </div>
</li>
  `
  ulLists.insertAdjacentHTML('beforeend',menuList)


// ======STARTERS TAB ===================
starters.addEventListener('click', function(){
  ulLists.innerHTML = ""

  for(let index = 0; index < menuItems.length; index++) {
    let itemsOfMenu = menuItems[index]
    let title = itemsOfMenu.title
    let image = itemsOfMenu.imageURL
    let description = itemsOfMenu.description
    let priceButton = itemsOfMenu.price
    let course = itemsOfMenu.course

    let menuList = `
    <li id="images">
    <img src="${image}" />
    <label><strong>${title}</strong>
    <p>${description}</p> </label>
    <div id="buttonDiv">
    <button id="PriceTab">Price:$${priceButton}</button> </div>
  </li>
    `


  if(itemsOfMenu.course == "Starters"){
  ulLists.insertAdjacentHTML('beforeend',menuList)
  }

}
})

// ============== DESSERTS TAB ===============

desserts.addEventListener('click', function(){
  ulLists.innerHTML = ""

  for(let index = 0; index < menuItems.length; index++) {
    let itemsOfMenu = menuItems[index]
    let title = itemsOfMenu.title
    let image = itemsOfMenu.imageURL
    let description = itemsOfMenu.description
    let priceButton = itemsOfMenu.price
    let course = itemsOfMenu.course

    let menuList = `
    <li id="images">
    <img src="${image}" />
    <label><strong>${title}</strong>
    <p>${description}</p> </label>
    <div id="buttonDiv">
    <button id="PriceTab">Price:$${priceButton}</button> </div>
  </li>
    `


  if(itemsOfMenu.course == "Desserts"){
  ulLists.insertAdjacentHTML('beforeend',menuList)
  }

}
})

// ================= Entrees Tab  ==========================


entrees.addEventListener('click', function(){
  ulLists.innerHTML = ""

  for(let index = 0; index < menuItems.length; index++) {
    let itemsOfMenu = menuItems[index]
    let title = itemsOfMenu.title
    let image = itemsOfMenu.imageURL
    let description = itemsOfMenu.description
    let priceButton = itemsOfMenu.price
    let course = itemsOfMenu.course

    let menuList = `
    <li id="images">
    <img src="${image}" />
    <label><strong>${title}</strong>
    <p>${description}</p> </label>
    <div id="buttonDiv">
    <button id="PriceTab">Price:$${priceButton}</button> </div>
  </li>
    `


  if(itemsOfMenu.course == "Entrees"){
  ulLists.insertAdjacentHTML('beforeend',menuList)
  }

}
})

// =========================================================
}
