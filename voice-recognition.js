document.addEventListener('DOMContentLoaded', function() {
    const voiceButton = document.getElementById('voiceButton');
    const voiceResult = document.getElementById('voiceResult');
    let recognition;

    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

        recognition.lang = 'en-US';

        voiceButton.addEventListener('click', () => {
            if (recognition && recognition.state === 'running') {
                recognition.stop();
                voiceButton.textContent = 'Start Listening';
            } else {
                recognition.start();
                voiceButton.textContent = 'Stop Listening';
            }
        });
        recognition.addEventListener('result', (event) => {
            const transcript = event.results[0][0].transcript;
            voiceResult.textContent = transcript;
        });

        recognition.addEventListener('end', () => {
            voiceButton.textContent = 'Start Listening';
        });
    } else {
        voiceButton.style.display = 'none';
        voiceResult.textContent = 'Speech recognition not supported.';
    }
});