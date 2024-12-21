"use strict";
(function () {
    const dropdownButton = document.querySelector(".menu-active");
    const submenu = document.querySelector(".submenu");

    dropdownButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        submenu.classList.toggle("open"); 
    });

    dropdownButton.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            submenu.classList.toggle("open"); 
        }
    });
})();
