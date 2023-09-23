function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const modeIcon = document.getElementById("mode-icon");
let profilePhoto = document.getElementById("profile-photo")
modeIcon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        modeIcon.src = "./assets/images/sun.png";
        modeIcon.title = "light mode";
        profilePhoto.src = "./assets/images/Profile Photo night.png"
        document.querySelector(".fa-linkedin").style.color = "white";
        document.querySelector(".fa-linkedin").style.background = "black";
        document.querySelector(".fa-github").style.color = "white";
        document.querySelector(".fa-github").style.background = "black";
    }else{
        modeIcon.src = "./assets/images/moon.png";
        modeIcon.title = "dark mode";
        profilePhoto.src = "./assets/images/Profile Photo Light.png";
        document.querySelector(".fa-linkedin").style.color = "";
        document.querySelector(".fa-linkedin").style.background ="";
        document.querySelector(".fa-github").style.color = "";
        document.querySelector(".fa-github").style.background = "";
    }
}
