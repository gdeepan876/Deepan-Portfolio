const darkButton = document.getElementById("darkMode");

darkButton.addEventListener("click", function(){

    document.body.classList.toggle("dark");


    // Change button icon

    if(document.body.classList.contains("dark")){

        darkButton.innerHTML = "☀️";

    }
    else{

        darkButton.innerHTML = "🌙";

    }

});



// Smooth scroll animation

const links = document.querySelectorAll("nav a");


links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        section.scrollIntoView({

            behavior:"smooth"

        });

    });

});



// Scroll reveal animation

const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        const position = section.getBoundingClientRect().top;


        if(position < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }


    });


});
