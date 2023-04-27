const card_title = document.getElementById("card-title")
const card_cover = document.getElementById("card-cover")

const audio_player = document.getElementById("audio-player");

const prev_btn = document.getElementById("prev-btn");
const play_btn = document.getElementById("play-btn");
const play_btn_icon = document.getElementById("play-icon");
const next_btn = document.getElementById("next-btn");


const progress_bar = document.getElementById("progress-bar");

let current_song_index;

const songs = [
    {
        title: "Amiga traidora",
        artist: "Angela Torrez",
        song_url: "songs/amiga-traidora.mp3",
        cover: "assets/covers/amiga-traidora.jpg"

    },
    {
        title: "Juice",
        artist: "Notorius Big",
        song_url: "songs/juice.mp3",
        cover: "assets/covers/notorius-big.jpg"
    },
    { 
        title: "Bocanada",
        artist: "Gustavo Cerati",
        song_url: "songs/bocanada.mp3",
        cover: "assets/covers/cerati-bocanada.jpg"
    },
    {
        title: "La ley y la trampa",
        artist: "Chaqueño palavecino",
        song_url: "songs/ley-y-trampa.mp3",
        cover: "assets/covers/chaquenio.jpg"
    }
]

const changeSong = {
    PREVIUS: "previus",
    NEXT: "next",

}

play_btn.addEventListener("click", togglePlaySong);
prev_btn.addEventListener("click", ()=>{
    loadSong(changeSong.PREVIUS)
});
next_btn.addEventListener("click", ()=>{
    loadSong(changeSong.NEXT)
});

initPlayer()


function initPlayer(){
    current_song_index = 0;
    updatePlayer();
}

function updatePlayer(){
    const song = songs[current_song_index];

    card_title.textContent = `${song.artist} - ${song.title}`;
    card_cover.setAttribute("src", song.cover);

    audio_player.setAttribute("src", song.song_url)
}

function togglePlaySong(){
    if(audio_player.paused){
        audio_player.play();
        play_btn_icon.setAttribute("src", "assets/icons/pause.png");
    }else{
        audio_player.pause();
        play_btn_icon.setAttribute("src", "assets/icons/play.png");
    }
}


function loadSong(action){
    if(action === changeSong.PREVIUS){
        current_song_index--;
        if(current_song_index < 0){
            current_song_index = songs.length - 1;
        }
    }
    if(action === changeSong.NEXT){
        current_song_index++;
        if(current_song_index > songs.length -1){
            current_song_index = 0;
        }
    }

    updatePlayer()
    togglePlaySong()
}


