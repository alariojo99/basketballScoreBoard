const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")

const add1Btn = document.querySelectorAll("#button-1")
const add2Btn = document.querySelectorAll("#button-2")
const add3Btn = document.querySelectorAll("#button-3")
const resetBtn = document.getElementById("resetBtn")

let puntuationHome = 0
let puntuationGuest = 0

//Al clicar +1
for (let i=0; i < add1Btn.length; i++){
    add1Btn[i].addEventListener("click", function(){
            //Home
            if (add1Btn[i].parentNode.parentNode.className === 'home-container'){
                puntuationHome += 1
                
                if (puntuationHome < 10){
                    homeScore.textContent = '0' + puntuationHome
                }else{
                    homeScore.textContent = puntuationHome
                }
            }     
            //Guest
            if (add1Btn[i].parentNode.parentNode.className === 'guest-container'){
                puntuationGuest += 1
    
                if (puntuationGuest < 10){
                    guestScore.textContent = '0' + puntuationGuest
                }else{
                    guestScore.textContent = puntuationGuest
                }
            }    
    })
}

//Al clicar +2
for (let i=0; i < add2Btn.length; i++){
    add2Btn[i].addEventListener("click", function(){
            //Home
            if (add2Btn[i].parentNode.parentNode.className === 'home-container'){
                puntuationHome += 2
                
                if (puntuationHome < 10){
                    homeScore.textContent = '0' + puntuationHome
                }else{
                    homeScore.textContent = puntuationHome
                }
            }     
            //Guest
            if (add2Btn[i].parentNode.parentNode.className === 'guest-container'){
                puntuationGuest += 2
    
                if (puntuationGuest < 10){
                    guestScore.textContent = '0' + puntuationGuest
                }else{
                    guestScore.textContent = puntuationGuest
                }
            }    
    })
}

//Al clicar +3
for (let i=0; i < add3Btn.length; i++){
    add3Btn[i].addEventListener("click", function(){
            //Home
            if (add3Btn[i].parentNode.parentNode.className === 'home-container'){
                puntuationHome += 3
                
                if (puntuationHome < 10){
                    homeScore.textContent = '0' + puntuationHome
                }else{
                    homeScore.textContent = puntuationHome
                }
            }     
            //Guest
            if (add3Btn[i].parentNode.parentNode.className === 'guest-container'){
                puntuationGuest += 3
    
                if (puntuationGuest < 10){
                    guestScore.textContent = '0' + puntuationGuest
                }else{
                    guestScore.textContent = puntuationGuest
                }
            }    
    })
}

//Reset button

resetBtn.addEventListener('click', function(){
    puntuationHome = 0
    homeScore.textContent = '0' + puntuationHome
    
    puntuationGuest = 0
    guestScore.textContent = '0' + puntuationGuest
})
