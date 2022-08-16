const hamburguer = Document.querySelector('.hamburguer');
const menu = Document.querySelector('.menu-navegacion');

console.log(menu)
console.log(hamburguer)

hamburguer.addEventListener('click',()=>{
    menu.classList.toggle("spread")
} )

