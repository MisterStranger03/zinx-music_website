
document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.getElementById('searchToggle');
    const searchBox = document.getElementById('searchBox');
    const searchClose = document.getElementById('searchClose');

    searchToggle.addEventListener('click', function() {
        searchBox.style.display = 'block';
    });

    searchClose.addEventListener('click', function() {
        searchBox.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const micButton = document.getElementById('micButton');
    const voiceSection = document.getElementById('voiceSection');

    micButton.addEventListener('click', function() {
        voiceSection.style.display = voiceSection.style.display === 'none' ? 'block' : 'none';
    });
});