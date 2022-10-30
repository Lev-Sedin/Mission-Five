const parallaxY = () =>{
    let vegitableBlack = document.getElementById("vegitableblack");
    let vegitableColor = document.getElementById("vegitablecolor");
    let pizza = document.getElementById("pizza");
    let flour = document.getElementById("flour");
    let title = document.getElementById("title");
    let car = document.getElementById("car");
    let vf = document.getElementById("vf")
    let icon = document.getElementById("icon")



    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        vegitableBlack.style.left = value * 0.15 + 'px'
        vegitableColor.style.left = -value * 0.15 + 'px'
        pizza.style.top = value  * 0.10 + 'px'
        flour.style.top = -value  * 0.10 + 'px'
        title.style.marginTop = -value  * 0.50 + 'px'
        car.style.left = -value/5* 0.7 + 'px'
        vf.style.top = -value/1.5 * 0.20 + 'px'
        icon.style.top = value * 0.20 + 'px'
    })
}

parallaxY() //паралакс

const scrollHeader = () =>{

    const scrol = document.querySelectorAll('.nav-item')
    console.log(scrol)
    
    for(let anchor of scrol){
       anchor.addEventListener('click',function(event){
          event.preventDefault();
          const blockID = anchor.getAttribute('href')
          document.querySelector('' + blockID).scrollIntoView({
             behavior: 'smooth',
             block: 'start'
          })
       })
    }
 
 
}
scrollHeader() // скрол от навигации