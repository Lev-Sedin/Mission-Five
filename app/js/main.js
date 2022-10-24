



const parallaxY = () =>{
    let vegitableBlack = document.getElementById("vegitableblack");
    let vegitableColor = document.getElementById("vegitablecolor");
    let pizza = document.getElementById("pizza");
    let flour = document.getElementById("flour");
    let title = document.getElementById("title");
    let text = document.getElementById("text")



    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        vegitableBlack.style.left = value * 0.15 + 'px'
        vegitableColor.style.left = -value * 0.15 + 'px'
        pizza.style.top = value  * 0.025 + 'px'
        title.style.marginRight = value  * 1.05 + 'px'
        text.style.marginRight = -value * 1.05  + 'px'
    })
}

parallaxY()

