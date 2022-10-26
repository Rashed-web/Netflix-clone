const video_player = document.querySelector('#video-player');
let video_popup = video_player.querySelector('.video-popup');
let main_video = video_player.querySelector('#my-video-popup');
let progressAreaTime = video_player.querySelector('.progressAreaTime');
let controls = video_player.querySelector('.controls');
let progressArea = video_player.querySelector('.progress-area');
let progress_Bar = video_player.querySelector('.progress-bar');
let fast_rewind = video_player.querySelector('.fast-rewind');
let play_pause = video_player.querySelector('.play_pause');
let fast_forward = video_player.querySelector('.fast-forward');
let volume = video_player.querySelector('.volume');
let volume_range = video_player.querySelector('.volume_range');
let current = video_player.querySelector('.current');
let totalDuration = video_player.querySelector('.duration');
let auto_play = video_player.querySelector('.auto-play');
let settingsBtn = video_player.querySelector('.settingsBtn');
let picture_in_picutre = video_player.querySelector('.picture_in_picutre');
let fullscreen = video_player.querySelector('.fullscreen');
let settings = video_player.querySelector('#settings');
let subtitle = video_player.querySelector(".outlined");
let subtitle_popup = video_player.querySelector('#subtitle');
let playlist = video_player.querySelector(".playlist_section");
let playlist_popup = video_player.querySelector("#playlist_popup");
let next_playlist = video_player.querySelector(".next_playlist");
let next_playlist_popup = video_player.querySelector("#next_playlist_popup");
let leftArrow = document.querySelector('.fa-arrow-left-long');
let playback_btn = video_player.querySelectorAll(".playback ul li");


function playVideo() {
    play_pause.innerHTML = "pause";
    play_pause.title = "play";
    video_player.classList.add("paused");
    main_video.play();
    console.log("button clicked");
}

function pauseVideo() {
    play_pause.innerHTML = "play_arrow";
    play_pause.title = "pause";
    video_player.classList.remove("paused");
    main_video.pause();
}

play_pause.addEventListener("click", () => {
    const isVideoPaused = video_player.classList.contains("paused");

    isVideoPaused ? pauseVideo() : playVideo();
});

main_video.addEventListener('play', () => {
    playVideo();
});

main_video.addEventListener('pause', () => {
    pauseVideo();
})


// fast rewind 

fast_rewind.addEventListener("click", () => {
    main_video.currentTime -= 10;
});

// fast forward 

fast_forward.addEventListener("click", () => {
    main_video.currentTime += 10;
});

// change volume

function changeVolume() {
    main_video.volume = volume_range.value / 100;
    if (volume_range.value == 0) {
        volume.innerHTML = "volume_off";
    } else if (volume_range.value > 0 && volume_range.value < 40) {
        volume.innerHTML = "volume_down";
    } else {
        volume.innerHTML = "volume_up";
    }
}

// muteValume 

function muteVolume() {
    if (volume_range.value == 0) {
        volume_range.value = 30;
        main_video.volume = 0.3;
        volume.innerHTML = "volume_up";
    } else {
        volume_range.value = 0;
        main_video.volume = 0;
        volume.innerHTML = "volume_off";
    }
}

volume_range.addEventListener("change", () => {
    changeVolume();
});

volume.addEventListener("click", () => {
    muteVolume();
})

// Full screen 

fullscreen.addEventListener('click', () => {
    if (!video_player.classList.contains("openFullScreen")) {
        video_player.classList.add("openFullScreen");
        fullscreen.innerHTML = "fullscreen_exit";
        video_player.requestFullscreen();
    } else {
        video_player.classList.remove("openFullScreen");
        fullscreen.innerHTML = "fullscreen";
        document.exitFullscreen();
    }
});

settingsBtn.addEventListener("click", () => {
    settings.classList.toggle("active");
    next_playlist_popup.classList.remove("active");
    playlist_popup.classList.remove("active");
    subtitle_popup.classList.remove("active");
});

// Playback speed 

playback_btn.forEach((event) => {
    event.addEventListener("click", () => {
        remaoveActiveClasses();
        event.classList.add("active");

        let speed = event.getAttribute('data-speed');
        main_video.playbackRate = speed;
    })
})

function remaoveActiveClasses() {
    playback_btn.forEach((event) => {
        event.classList.remove('active');
    })
};

// show subtitle popup

subtitle.addEventListener("click", () => {
    subtitle_popup.classList.toggle("active");
    settings.classList.remove('active');
    next_playlist_popup.classList.remove("active");
    playlist_popup.classList.remove("active");
});

// show playlist popup 

playlist.addEventListener("click", () => {
    playlist_popup.classList.toggle("active");
    subtitle_popup.classList.remove("active");
    settings.classList.remove('active');
    next_playlist_popup.classList.remove("active");
});

// show next playlist popup 

next_playlist.addEventListener("click", () => {
    next_playlist_popup.classList.toggle("active");
    playlist_popup.classList.remove("active");
    subtitle_popup.classList.remove("active");
    settings.classList.remove('active');
});

// hide everything in fullscreen 

fullscreen.addEventListener("click", () => {
    next_playlist_popup.classList.remove("active");
    playlist_popup.classList.remove("active");
    subtitle_popup.classList.remove("active");
    settings.classList.remove('active');
});

// hide and show controls 

video_player.addEventListener("mousemove", () => {
    controls.classList.add("active");

});

// Clicking on left arrow all the popup will be gone 

leftArrow.addEventListener("click", () => {
    next_playlist_popup.classList.remove("active");
    playlist_popup.classList.remove("active");
    subtitle_popup.classList.remove("active");
    settings.classList.remove('active');
})
