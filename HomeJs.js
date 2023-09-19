const menuBtn = document.getElementById("ham-menu");
const closeBtn = document.getElementById("close-btn");
const aside = document.querySelector("aside");
const moon = document.querySelector('.moon')
const themeToggler = document.querySelector('.theme-toggler')
themeToggler.addEventListener('click', ()=>{
   
    document.body.classList.toggle('dark-theme-variable')
    themeToggler.children[0].classList.toggle('active')
    themeToggler.children[1].classList.toggle('active')
    
   
})
menuBtn.addEventListener("click", () => {
  aside.style.display = 'block'

});
closeBtn.addEventListener("click", () => {
  aside.style.display = "none";
});
