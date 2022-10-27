
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
scrollHeader()
