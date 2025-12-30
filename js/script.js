// This is a global variable to make a audio element this is used 
let currentSong = new Audio();
let songs;

// This is used to change the time format into ( --:-- )
function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// This function uses the directory to get the songs :
// async function getSongs() {
//     let dir = await fetch("http://127.0.0.1:3000/songs/");
//     let response = await dir.text();
//     let div = document.createElement("div");
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a");
//     let songs = [];
//     for (let i = 0; i < as.length; i++) {
//         let element = as[i];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href.split("%5Csongs%5C")[1]);
//         }
//     }
//     return songs;
// }

// This is for deployement purpose on the static front like netlify
async function getSongs() {
    const res = await fetch("songs/songs.json");
    return await res.json();
}


// This function makes the clicking on the songs functionality work : 
function playMusic(track, pause = false, songName) {
    // let audio = new Audio(track)
    currentSong.src = track
    if (!pause) {
        currentSong.play();
        play.src = "assets/icons/pause-svgrepo-com.svg";

    }
    document.querySelector(".songInfo").innerHTML = songName;
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00";
}

// This is the main function :

async function main() {
    // Get list of songs : 
    songs = await getSongs();
    console.log(songs)
    playMusic(`http://127.0.0.1:3000/songs/${songs[0]}`, true, songs[0])

    // Here we are making functionality to show song names on webpage
    let songUL = document.querySelector(".card-column").getElementsByTagName("ul")[0];
    for (const song of songs) {
        // This is correct : 
        songUL.innerHTML = songUL.innerHTML + `
        <li class="songList flex" data-song = "http://127.0.0.1:3000/songs/${song}" >
                            <img class="invert height width " src="assets/icons/music-svgrepo-com.svg" alt="">
                            <div class="info flex flex-direction">
                               <span>${song.replaceAll("-", " ")}</span>
                               <span>artist name</span>
                            </div>
                            <div class="flex align-items gap">
                                <span>Play Now</span>
                                <img class="invert height width" src="assets/icons/stream-song.svg" alt="">
                            </div>
                           </li>`;
        // This is incorrect : 
        // songUL.innerHTML = song;
    }

    Array.from(document.querySelector(".card-column").getElementsByTagName("li")).forEach((e) => {
        e.addEventListener("click", (element) => {
            playMusic(e.dataset.song, false, e.querySelector("div").firstElementChild.innerHTML);
        })
    })


    // This is given by chatgpt but I wasn't using this as if i add something in .songList it will be included because of querySelectorAll :-

    // Array.from(document.querySelectorAll(".songList")).forEach((e) => {
    //     console.log(e)
    //     e.addEventListener("click", () => {
    //         playMusic(e.dataset.song);
    //     });
    // });

    // Making the playbar Controls :-

    // Attach an event listener to play
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "assets/icons/pause-svgrepo-com.svg";
        }
        else {
            currentSong.pause();
            play.src = "assets/icons/play-svgrepo-com.svg";

        }
    })

    // Attach an event listener to previous
    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);

        if (index > 0) {
            playMusic(`http://127.0.0.1:3000/songs/${songs[index - 1]}`, false, songs[index - 1]
            );
        }
    });

    // Attach an event listener to next
    next.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);

        if (index < songs.length - 1) {
            playMusic(`http://127.0.0.1:3000/songs/${songs[index + 1]}`, false, songs[index + 1]
            );
        }
    });

    // Updating Time throught timeupdate function :-
currentSong.addEventListener("timeupdate", (e) => {
        // console.log(currentSong.currentTime,currentSong.duration);  
        document.querySelector(".songTime").innerHTML = `${formatTime(currentSong.currentTime)}/${formatTime(currentSong.duration)}`;

        // Making the seekbar look running : 
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";

    })

    // Make the seekbar react on clicking :-
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        percent = Math.max(0, Math.min(100, percent));
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100;
    })


    // This creates the hamburger functionality 
    let hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", (e) => {
        const aside = document.querySelector("aside");
        const hambImg = hamburger.querySelector("img");
        const isOpen = aside.style.left === "0" || getComputedStyle(aside).left === "0px";
        if (!isOpen) {
            aside.style.left = "0";
            hambImg.src = "assets/icons/cross-svgrepo-com.svg";
        } else {
            // aside.style.transition = "all 1s 0s cubic-bezier(0.53, 0.13, 0.37, 0.86)";
            aside.style.left = "-120%";
            hambImg.src = "assets/icons/hamburger-menu-svgrepo-com.svg";

        }
    })

    


    // console.log(songUL);
}

main() 