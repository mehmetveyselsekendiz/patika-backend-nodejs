const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];


let button_list = document.querySelector("#button-list")

/*
=> for unique elements in a list
list = list.filter((x, i, a) => a.indexOf(x) == i) 
ref: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
*/

let category_array = menu.map(food => food.category).filter((x,i,a)=>a.indexOf(x) == i)
category_array.unshift("All")

const refresh_button = () =>{
  while(button_list.firstChild){
    button_list.removeChild(button_list.lastChild)
  }
}

const create_button = (category_array) => {
  refresh_button()
  category_array.map(category=>{
    let new_button= document.createElement("BUTTON")
    new_button.classList.toggle("btn")
    new_button.classList.toggle("btn-outline-dark")
    new_button.classList.toggle("btn-item")
    new_button.innerHTML = category
    new_button.addEventListener("click",(e)=>show_category(e))
    button_list.appendChild(new_button)
  })
}

let menu_list = document.querySelector("#menu-list")

const refresh_menu = () =>{
  while(menu_list.firstChild){
    menu_list.removeChild(menu_list.lastChild)
  }
}

const create_menu = (menu_array) => {
  refresh_menu()
  menu_array.map(food=>{
    let new_food= document.createElement("div")
    new_food.classList.toggle("menu-items")
    new_food.classList.toggle("col-lg-6")
    new_food.classList.toggle("col-sm-12")
    menu_list.appendChild(new_food)
    new_food.innerHTML = 
        `
        <img class="photo" src="${food.img}" alt="${food.title}">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${food.title}</h4>
            <h4>${food.price}</h4>
          </div>
          <div class="menu-text">${food.desc}</div>
        </div>
        `
  })
}

const menu_all = () => create_menu(menu)

const show_category = (e) =>{
  let category = e.target.childNodes[0].nodeValue
  category == "All" ? menu_all() : create_menu(menu.filter(food=> food.category == category))
}

create_button(category_array)
menu_all()