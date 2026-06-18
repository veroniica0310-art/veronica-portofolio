// Navbar Active Menu

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {

        links.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


// Animasi muncul saat scroll

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";
});