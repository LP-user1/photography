const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const menu = document.getElementById('menu');
const navLink = document.querySelectorAll('.nav-link');
const mainTag = document.getElementById('mainSection');
const sections = document.querySelectorAll('section');

mainTag.addEventListener('click',()=>{
  if(menu.classList.contains('showMenu')){
    menu.classList.remove('showMenu');
  }
})
menuOpen.addEventListener('click',()=>{
  menu.classList.add('showMenu');
})
menuClose.addEventListener('click',()=>{
  menu.classList.remove('showMenu');
})

navLink.forEach(link => {
  link.addEventListener('click',()=>{
    removeActiveAll();
    link.classList.add('active');
  })
});

const removeActiveAll = () =>{
  navLink.forEach(link => {
      link.classList.remove("active");
      if(menu.classList.contains('showMenu')){
        menu.classList.remove('showMenu');
      }
  });
}

function navActiveChange() {
  window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });
    navLink.forEach(link => {
      link.classList.remove('active');
      if(currentSection == link.childNodes[0].getAttribute('href').split('#')[1]){
        link.classList.add("active");
      }
    })
  });
}
navActiveChange();
