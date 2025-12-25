// This function uses the directory to get the songs : 
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


async function main() {
    // Get list of songs : 
    let songs = await getSongs();

    // Here we are making functionality to show song names on webpage
    let songUL = document.querySelector(".card-column").getElementsByTagName("ul")[0];
    for (const song of songs) {
        // This is correct : 
        songUL.innerHTML = songUL.innerHTML + `
        <li class="flex">
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
    console.log(songUL);

    let audio = new Audio(songs[0]);
    document.body.addEventListener("click", () => {
        // audio.play();
    })
}

main() 