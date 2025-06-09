// Song data
const songs = [
    {
        title: "Tiimbe Choir",
        artist: "Cacoon Vocalist",
        producer: "Prodby Vplus",
        artwork: "assets/@0060_Cacoon4.jpg",
        file: "assets/Cacoon Vocalist-Tiimbe Choir.Prodby Vplus.mp3",
        views: 0,
        downloads: 0,
        plays: 0
    },
    {
        title: "Liyana",
        artist: "Inno Side",
        producer: "Prodby Vplus",
        artwork: "assets/@0060_INNOSIDE.jpg",
        file: "assets/Inno Side-Liyana.Prodby Vplus.mp3",
        views: 0,
        downloads: 0,
        plays: 0
    },
    {
        title: "Guluu",
        artist: "Lil Ellz",
        producer: "Prodby Vplus",
        artwork: "assets/@0063_Lilellz1.jpg",
        file: "assets/Lil Ellz-Guluu.Prodby Vplus.mp3",
        views: 0,
        downloads: 0,
        plays: 0
    }
];

let currentSongIndex = null;
let cookiesAccepted = false;

// Modal logic
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}
function closeModal(id) {
    document.getElementById(id).style.display = "none";
    if (id === 'song-modal') {
        document.getElementById('audio-player').pause();
        document.getElementById('audio-player').style.display = "none";
    }
}

// Contact & About
document.getElementById('contact-link').onclick = function(e) {
    e.preventDefault();
    openModal('contact-modal');
};
document.getElementById('about-link').onclick = function(e) {
    e.preventDefault();
    openModal('about-modal');
};

function redirectWhatsApp() {
    const phone = "265998662690";
    const msg = encodeURIComponent("How much is song upload today?");
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}
function redirectEmail() {
    window.location.href = "mailto:lukevplusnzima@gmail.com?subject=Song Upload Inquiry";
}

// Song modal logic
function openSongPage(index) {
    currentSongIndex = index;
    const song = songs[index];
    song.views++;
    document.getElementById('song-artwork').src = song.artwork;
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('song-artist').textContent = "Artist: " + song.artist;
    document.getElementById('song-producer').textContent = "Producer: " + song.producer;
    document.getElementById('song-views').textContent = `Views: ${song.views}`;
    document.getElementById('song-downloads').textContent = `Downloads: ${song.downloads}`;
    document.getElementById('song-plays').textContent = `Live Plays: ${song.plays}`;
    document.getElementById('audio-player').src = song.file;
    document.getElementById('audio-player').style.display = "none";
    document.querySelector('.song-actions').style.display = "flex";
    document.getElementById('cookie-consent').style.display = "none";
    openModal('song-modal');
}

// Play song
function playSong() {
    const audio = document.getElementById('audio-player');
    audio.style.display = "block";
    audio.play();
    songs[currentSongIndex].plays++;
    document.getElementById('song-plays').textContent = `Live Plays: ${songs[currentSongIndex].plays}`;
}

// Download song
function downloadSong() {
    if (!cookiesAccepted) {
        document.querySelector('.song-actions').style.display = "none";
        document.getElementById('cookie-consent').style.display = "block";
        return;
    }
    const song = songs[currentSongIndex];
    song.downloads++;
    document.getElementById('song-downloads').textContent = `Downloads: ${song.downloads}`;

    // Create a temporary anchor and trigger download
    const link = document.createElement('a');
    link.href = song.file;
    link.download = song.title + " - " + song.artist + ".mp3";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// Accept cookies
function acceptCookies() {
    cookiesAccepted = true;
    document.getElementById('cookie-consent').style.display = "none";
    document.querySelector('.song-actions').style.display = "flex";
}

// Close modal on outside click
window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) modal.style.display = "none";
    });
};