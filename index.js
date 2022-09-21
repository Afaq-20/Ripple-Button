const btnEl = document.querySelector(".btn")

const x = (event)=>{
    const a = (event.pageX-btnEl.offsetLeft);
    const b = (event.pageY-btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", a + "px")
    btnEl.style.setProperty("--yPos", b + "px")
}

btnEl.addEventListener("mouseover", x)