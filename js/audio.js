import { $ } from './dom.js';

export const init = () => {
    let musicMuted = true;
    const audioButton = $('.header i.bx');
    const equaliser = $('.equaliser-container');
    const audio = $('#audio');
    const speaker = $('#speaker');
    let monitorScroll = false;

    if (!audioButton)
        return;

    audioButton.onclick = evt => {
        evt.preventDefault();
        audioButton.classList.toggle('bx-volume-mute');
        equaliser.classList.toggle('hide');

        audio.muted = !musicMuted;
        musicMuted = !musicMuted;
    }

    // document.addEventListener('click', musicPlay);
    musicPlay();

    function musicPlay() {
        speaker.classList.toggle('hide');
        $('#audio').play();
        audioButton.classList.toggle('bx-volume-mute');
        equaliser.classList.toggle('hide');
        musicMuted = false;
        document.removeEventListener('click', musicPlay);
    }
}
