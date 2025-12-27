// This function uses the directory to get the songs :
let currentSong = new Audio();

async function getSongs() {
    let dir = await fetch("http://127.0.0.1:3000/songs/");
    let response = await dir.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let i = 0; i < as.length; i++) {
        let element = as[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("%5Csongs%5C")[1]);
        }
    }
    return songs;
}


function playMusic(track , songName) {
    // let audio = new Audio(track)
    currentSong.src = track
    currentSong.play();
    play.src = "pause-svgrepo-com.svg"
    document.querySelector(".songInfo").innerHTML = songName;
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00";
}

async function main() {
    // Get list of songs : 
    let songs = await getSongs();
    console.log(songs)

    // Here we are making functionality to show song names on webpage
    let songUL = document.querySelector(".card-column").getElementsByTagName("ul")[0];
    for (const song of songs) {
        // This is correct : 
        songUL.innerHTML = songUL.innerHTML + `
        <li class="songList flex" data-song = "http://127.0.0.1:3000/songs/${song}" >
                            <img class="invert height width " src="music-svgrepo-com.svg" alt="">
                            <div class="info flex flex-direction">
                               <span>${song.replaceAll("-", " ")}</span>
                               <span>artist name</span>
                            </div>
                            <div class="flex align-items gap">
                                <span>Play Now</span>
                                <img class="invert height width" src="stream-song.svg" alt="">
                            </div>
                           </li>`;
        // This is incorrect : 
        // songUL.innerHTML = song;
    }

    Array.from(document.querySelector(".card-column").getElementsByTagName("li")).forEach((e)=>{
        e.addEventListener("click",(element)=>{
            playMusic(e.dataset.song, e.querySelector("div").firstElementChild.innerHTML);
        })
    })

    // This is given by chatgpt but I wasn't using this as if i add something in .songList it will be included because of querySelectorAll :-

    // Array.from(document.querySelectorAll(".songList")).forEach((e) => {
    //     console.log(e)
    //     e.addEventListener("click", () => {
    //         playMusic(e.dataset.song);
    //     });
    // });


    // Attach an event listener to previous play and next
    play.addEventListener("click",()=>{
        if(currentSong.paused){
            currentSong.play();
            play.src = "pause-svgrepo-com.svg"
        }
        else{
            currentSong.pause();
            play.src = "play-svgrepo-com.svg"
        }
    })



    // console.log(songUL);
}

main() 