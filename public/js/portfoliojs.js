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


