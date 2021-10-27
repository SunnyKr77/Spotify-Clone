console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Kaikai Kitan", filePath: "C:\Code\web dev\Spotify Clone\1.mp3", coverPath: "C:\Code\web dev\Spotify Clone\cover1.png"},
    {songName: "Kaikai Kitan", filePath: "C:\Code\web dev\Spotify Clone\1.mp3", coverPath: "C:\Code\web dev\Spotify Clone\cover1.png"},
    {songName: "Kaikai Kitan", filePath: "C:\Code\web dev\Spotify Clone\1.mp3", coverPath: "C:\Code\web dev\Spotify Clone\cover1.png"},
    {songName: "Kaikai Kitan", filePath: "C:\Code\web dev\Spotify Clone\1.mp3", coverPath: "C:\Code\web dev\Spotify Clone\cover1.png"},
    {songName: "Kaikai Kitan", filePath: "C:\Code\web dev\Spotify Clone\1.mp3", coverPath: "C:\Code\web dev\Spotify Clone\cover1.png"}
]
//audioElement.play();
 
//handle play-pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    //updating seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})