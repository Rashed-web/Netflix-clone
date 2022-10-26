let itemContainer = document.querySelectorAll(".itemContainer");
let signs = document.querySelectorAll(".signs");

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
            margin: 10,
            slideBy: 1,
        },

        500: {
            items: 3,
            nav: false,
            margin: 10,
            slideBy: 1,
        },

        768: {
            items: 4,
            margin: 10,
            slideBy: 2,
        },

        1200: {
            items: 6,
            slideBy: 4,
        },
    },
});

let cross = document.querySelector(".cross");
let down = document.querySelectorAll(".down");
let mainPopup = document.querySelector(".mainPopup");
let bannerImg = document.querySelectorAll("bannerImg");

down.forEach((element) => {
    element.onclick = () => {
        mainPopup.style.display = "initial";
    };
});

cross.onclick = () => {
    mainPopup.style.display = "none";
    detailSection.style.display = 'none';
};

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");

icon.onclick = function () {
    search.classList.toggle("active");
};

let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        nav.classList.add("nav_black");
    } else {
        nav.classList.remove("nav_black");
    }
});

let profileImg = document.getElementById("profileImg");
let downProfile = document.querySelector(".downProfile");
let rotateBtn = document.querySelector(".rotateBtn");
let detailSection = document.querySelector("#detail-section");

profileImg.addEventListener("mouseover", () => {
    downProfile.classList.add("active");
    moviesNotify.classList.remove('active');
    rightNav.classList.remove('active')
});

profileImg.addEventListener("mouseout", () => {
    downProfile.classList.remove("active");
});

downProfile.addEventListener("mouseover", () => {
    downProfile.classList.add("active");
});

downProfile.addEventListener("mouseout", () => {
    downProfile.classList.remove("active");
});

detailSection.addEventListener("mouseover", () => {
    detailSection.style.display = 'block'
});

detailSection.addEventListener("mouseout", () => {
    detailSection.style.display = 'none'
});

// detailSection.addEventListener("mouseout", () => {
//     downProfile.classList.remove("active");
// });


let browse = document.querySelector('.browse');
let rightNav = document.querySelector('.rightNav');

browse.addEventListener('click', () => {
    rightNav.classList.toggle('active');
    moviesNotify.classList.remove('active');
})

let moviesNotify = document.querySelector('.moviesNotify');
let bell = document.querySelector('.fa-bell');

bell.addEventListener('click', () => {
    moviesNotify.classList.toggle('active');
    rightNav.classList.remove('active');
});

// $(".card-item").mouseover((e) => {
//     // alert(1);
//     debugger;
//     console.log(11211212);
//     $("#episode-section").show();
// });

window.addEventListener('mousemove', (e) => {
    let xPos = e.pageX - 100;
    let yPos = e.pageY - 100;
    console.log(xPos, yPos);

    $(".card-item").mouseover((e) => {
        $("#detail-section").css({ top: yPos, left: xPos, display: 'initial', animation: "hoverPopup 0.3s linear" });
    });

    $(".card-item").mouseout((e) => {
        $("#detail-section").css("display", "none");
    });
})

// $(".card-item").mouseover((e) => {
//     $("#detail-section").css({ top: topPosition, left: leftPosition, display: 'initial' });
// });

// $(".card-item").mouseout((e) => {
//     $("#detail-section").css("display", "none");
// });

let seasonPopup = document.querySelector('.season-popup');
let seasonPopupShow = document.querySelector('.season-popup-show');

seasonPopup.onclick = () => {
    seasonPopupShow.classList.toggle('active');
};

let play = document.querySelectorAll('.play');
let videoPopup = document.querySelector('.video-popup');
let targeted_video = document.querySelector("#my-video-popup");
let arrowLeft = document.querySelector('.fa-arrow-left-long');
let body = document.querySelector('body');

function startVideo() {
    targeted_video.play();
}

play.forEach(element => {
    element.addEventListener('click', () => {
        videoPopup.classList.add('active');
        body.classList.add('active');
        startVideo()
    })
});

function stopVideo() {
    targeted_video.pause();
}

arrowLeft.onclick = () => {
    videoPopup.classList.remove('active');
    body.classList.remove('active');
    stopVideo()
}

// Video js 



