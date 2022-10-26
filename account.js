let firstControl = document.querySelector(".firstControl");
let secondControl = document.querySelector(".secondControl");
let thirdControl = document.querySelector(".thirdControl");

let profileSet1 = document.querySelectorAll(".profileSet1");
let profileSet2 = document.querySelectorAll(".profileSet2");
let profileSet3 = document.querySelectorAll(".profileSet3");

let hr1 = document.querySelectorAll(".hr1");
let hr2 = document.querySelectorAll(".hr2");
let hr3 = document.querySelectorAll(".hr3");

let updown1 = document.querySelector(".upDown1");
let updown2 = document.querySelector(".upDown2");
let updown3 = document.querySelector(".upDown3");

let nav = document.querySelector('nav');




firstControl.onclick = function () {
    profileSet1.forEach((element) => {
        if (element.style.display == "none") {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    });
};

secondControl.onclick = function () {
    profileSet2.forEach((element) => {
        if (element.style.display == "none") {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    });
};

thirdControl.onclick = function () {
    profileSet3.forEach((element) => {
        if (element.style.display == "none") {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    });
};
