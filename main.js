 const menuBtn = document.getElementById("menu-btn");
 const navLinks = document.getElementById("nav-links");
 const menuBtnIcon = menuBtn.querySelector("i");

 menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line":"ri-menu-line")
 })    

 navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class" , "ri-menu-line");
 })

 const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
 }


 ScrollRevealOption(). reveal(".header_container p", {
    ...ScrollRevealOption,
 });

ScrollRevealOption(). reveal(".header_container h1  ", {
    ...ScrollRevealOption,
    delay: 500,
});


ScrollRevealOption(). reveal(".about_image img", {
    ...ScrollRevealOption,
    origin: "left",
 });

 ScrollRevealOption(). reveal(".about_container .section_subheader", {
    ...ScrollRevealOption,
    delay: 500,
});

ScrollRevealOption(). reveal(".about_container .section_header", {
    ...ScrollRevealOption,
    delay: 1000,
});

ScrollRevealOption(). reveal(".about_container .section_description", {
    ...ScrollRevealOption,
    delay: 1500,
});

ScrollRevealOption(). reveal(".about_btn", {
    ...ScrollRevealOption,
    delay: 2000,
});


ScrollReveal().reveal(".room_card", {
    ...ScrollRevealOption,
    interval: 500,
});


ScrollReveal().reveal(".service_list li", {
    ...ScrollRevealOption,
    interval: 500,
    origin: "right",
});

