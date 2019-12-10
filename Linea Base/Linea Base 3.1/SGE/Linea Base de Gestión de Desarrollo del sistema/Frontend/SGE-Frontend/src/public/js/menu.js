var iconToggle = document.getElementById("iconToggle"),
    isVisible = false,
    menuToggle = document.getElementById("menuToggle");

iconToggle.addEventListener("click", function(e){
    e.preventDefault();

    if(!isVisible){        
        menuToggle.className += " visible";
        isVisible = !isVisible;
    }else{
        menuToggle.className = "menu-lateral";
        isVisible = !isVisible;
    }
});