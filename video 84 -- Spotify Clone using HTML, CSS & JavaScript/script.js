console.log("let's write JavaScript");

async function getSongs() {
    let a = await fetch("http://192.168.29.127:3000/songs/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")

    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1].split(".mp3")[0])
        }
    }
    return songs;
}

async function main() {
    // Get the list of all the songs
    let songs = await getSongs()
    console.log(songs)

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("_", " ").replaceAll("(256k)", " ").replaceAll("%E0%A6%97%E0%A6%BE%E0%A6%A8%E0%A7%87", "").replaceAll("%E2%80%93", "")}</div>
                                <div>Ramash</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="play.svg" alt="">
                            </div>  </li>`
    }

    //play the first song
    let audio = new Audio(songs[0]);
    audio.play();

    audio.addEventListener("loadeddata", () => {
        console.log(audio.duration, audio.currentSrc, audio.currentTime)
        // The duration variable now holds the duration (in seconds) of the audio clip
    })
}
main()