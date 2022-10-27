



const parallaxY = () =>{
    let vegitableBlack = document.getElementById("vegitableblack");
    let vegitableColor = document.getElementById("vegitablecolor");
    let pizza = document.getElementById("pizza");
    let flour = document.getElementById("flour");
    let title = document.getElementById("title");
    let text = document.getElementById("text")
    let car = document.getElementById("car");



    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        vegitableBlack.style.left = value * 0.15 + 'px'
        vegitableColor.style.left = -value * 0.15 + 'px'
        pizza.style.top = value  * 0.10 + 'px'
        // flour.style.top = -value  * 0.20 + 'px' переписать положение , вывести в 0 топ и лефт и преносить с помощью трансфом
        title.style.marginRight = value  * 1.05 + 'px'
        text.style.marginRight = -value * 1.05  + 'px'
        car.style.left = -value* 0.5 + 'px'
    })
}

parallaxY()

