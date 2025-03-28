document.getElementsByClassName("morediv")[0].addEventListener("click",()=>
{
    const cards= document.getElementsByClassName("project-card")

    Array.from(cards).forEach(element => {
        element.style.display = "block";
    });
})

const cards= document.getElementsByClassName("project-card")
if(cards.length>4)
{
   const moreDiv= document.getElementsByClassName("morediv")[0]
   moreDiv.style.display="block"
}



document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    slides[currentSlide].classList.add('active');
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        
        currentSlide = (currentSlide + 1) % slides.length;
    
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    slides[currentSlide].classList.add('active');
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        
        currentSlide = (currentSlide + 1) % slides.length;
    
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    slides[currentSlide].classList.add('active');
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        
        currentSlide = (currentSlide + 1) % slides.length;
    
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 3000);
});



// -----------------------------------------------------------------------------------------------------------------------

