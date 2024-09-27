//general js with active links and menu collapse
//active link
const links = document.querySelectorAll('.list-link')
const currentPath = window.location.pathname

links.forEach(link =>{
  if (link.getAttribute('href')==currentPath){
   link.classList.add('active')}
   else{
    link.classList.remove('active')
   }
})

//menu collapse

const menuIcon = document.getElementById('btn-menu')
const closeIcon = document.getElementById('btn-close')
const menu = document.querySelector('.Menu')
menuIcon.addEventListener('click',()=>{
  menu.classList.add('collapsed')
})
closeIcon.addEventListener('click',()=>{
  menu.classList.remove('collapsed')
})


