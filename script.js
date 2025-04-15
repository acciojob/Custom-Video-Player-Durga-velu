/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const playBtn=document.querySelector(".player__button")


toggle.addEventListener(("click"),(e)=>{
    if(video.paused){
        video.play();
       e.target.textContent=" ❚ ❚ "
    }
    else{
        video.pause();
       e.target.textContent=" ► "
    }
})


video.addEventListener("timeUpdate",()=>{
    const Percent=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${Percent}%`
})


ranges[0].addEventListener("input",()=>{
    video.volume=ranges[0].value;
})


ranges[1].addEventListener("input",()=>{
    video.playbackRate=ranges[1].value;
})


skipButtons.forEach(button =>{
    button.addEventListener("click",()=>{
        video.currentTime +=parseFloat(button.dataset.skip)
    })
})


















