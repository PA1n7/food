document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
});

const hiddenElements = document.querySelectorAll(".hidden")

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show")
        }
    })
})

hiddenElements.forEach((el)=>observer.observe(el))

const hiddenx = document.querySelectorAll(".hidden-x")

const observerx = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-x");
        }else{
            entry.target.classList.remove("show-x")
        }
    })
})


hiddenx.forEach((el)=>observerx.observe(el))