let narrate = document.querySelector(".recurring-link");
let changingImage = document.querySelector(".changing-image");
let recuringLink = document.querySelector(".recurring-link")

var changinImageCount = 3;
narrate.addEventListener('click', function(){
    switch(changinImageCount) {
        case 3:
            changingImage.src = "https://i.ibb.co/qMPP6qj/3.png"
            break;
        case 4:
            changingImage.src = "https://i.ibb.co/F8tNj70/4.png"
            break;
        case 5:
            changingImage.src = "https://i.ibb.co/744WwCD/5.png"
            break;
        case 6:
            changingImage.src = "https://i.ibb.co/1qZ85Qq/6.png"
            break;
        case 7:
            changingImage.src = "https://i.ibb.co/xYm0w32/7.png" 
            break;
        case 8:
            recuringLink.href = "#slide4"
        default:
      } 
    changinImageCount++;
})

var flipCardCount = 0;
let flipCardBtn = document.querySelector(".flip-card-next-button");
let flippingCard = document.querySelector(".flipping-card")
flipCardBtn.addEventListener('click', function(){
    setTimeout(function(){ flippingCard.src = "https://i.ibb.co/qMPP6qj/3.png" }, 2000);
    setTimeout(function(){ flippingCard.src = "https://i.ibb.co/xYm0w32/7.png" }, 2400);
    setTimeout(function(){ flippingCard.src = "https://i.ibb.co/F8tNj70/4.png" }, 2800);
    setTimeout(function(){ flippingCard.src = "https://i.ibb.co/J2KHpSR/2.png" }, 3200);
    setTimeout(function(){ flippingCard.src = "https://i.ibb.co/1qZ85Qq/6.png" }, 3600);
    setTimeout(function(){ flippingCard.src = "https://i.ibb.co/Dz1PRqc/1.png" }, 4000);
    setTimeout(function(){ flippingCard.src = "https://i.ibb.co/T0j6yL1/8.png" }, 4400);
    
})

