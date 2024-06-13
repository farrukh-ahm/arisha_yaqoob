const pics = document.querySelectorAll(".secondary-page-image")

const observer = new IntersectionObserver(enteries=>{

    enteries.forEach(entry=>{
        // entry.target.style.Opacity = "1"
        entry.target.classList.toggle("appear",entry.isIntersecting)
        if(entry.isIntersecting){
            observer.unobserve(entry.target)
        }
    })

}, {
    threshold: 1
})

pics.forEach(pic=>{
    observer.observe(pic)
})