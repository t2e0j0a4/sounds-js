let buttons = document.querySelectorAll(".playSound");
let audios = document.querySelectorAll('audio');

function handleSound() {
    let token = this.dataset.token;
    audios.forEach((audio) => {
        let audioToken = audio.dataset.audio;
        if (token === audioToken) {
            audio.currentTime = 0;
            audio.play();
        }
        else {
            audio.pause();
        }
    })
}

buttons.forEach((btn) => {
    btn.addEventListener('click', handleSound);
})