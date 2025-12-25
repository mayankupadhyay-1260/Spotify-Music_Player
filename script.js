async function getSongs() {
    let dir = await fetch("http://127.0.0.1:3000/songs/");
    let response = await dir.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for(let i = 0;i<as.length;i++){
        let element = as[i];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href);
        }
    }
    return songs;
}


async function main(){
    let song = await getSongs();
    let audio = new Audio(song[0]);
    document.body.addEventListener("click",()=>{
        audio.play();
    })
}

main() 