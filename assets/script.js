// Project Info and Image observer

const infos = document.querySelectorAll(".project-info")
const imgs = document.querySelectorAll(".project-image")

const infoObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry => {
        
        entry.target.classList.toggle("info-appear", entry.isIntersecting)

        if(entry.isIntersecting){
            infoObserver.unobserve(entry.target)
        }

    })

}, {
    threshold: 0.5
})

infos.forEach(info => {
    infoObserver.observe(info)
})



const imgObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        entry.target.classList.toggle("image-appear", entry.isIntersecting)

        if(entry.isIntersecting){
            imgObserver.unobserve(entry.target)
        }

    })

},{
    threshold: 0.5
})

imgs.forEach(image=>{
    imgObserver.observe(image)
});


// Tech Section observer
const techTitle = document.querySelector(".tech-title");
const tech = document.querySelector(".tec-wrapper");

const techTitleObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry => {

        entry.target.classList.toggle("techAnime", entry.isIntersecting)

        if(entry.isIntersecting){
            techTitleObserver.unobserve(entry.target)
        }

    })

},{
    threshold:0.2
})

techTitleObserver.observe(techTitle)
techTitleObserver.observe(tech)