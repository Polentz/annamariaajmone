// ---------------------------------------------------------------
// TRACKLIST – to add / remove / reorder a track, edit this array.
//   YouTube:  { source: 'youtube',  id: 'VIDEO_ID',  title, artist, info }
//   Bandcamp: { source: 'bandcamp', kind: 'track' | 'album', id: 'NUMERIC_ID', title, artist, info, height }
//   (the Bandcamp numeric ID is in the page source / "Share > Embed")
// ---------------------------------------------------------------
const tracks = [
    { source: 'youtube', id: 'Efu27t20QVQ', title: 'The Ancient Musical Complex Of Mammoth Bones', artist: 'Nikolaienko', info: 'Laura Agnusdei', number: '#1' },
    { source: 'bandcamp', kind: 'album', id: '972412791', title: 'Giocare con il movimento', artist: 'Ottaven', height: 230, info: 'Canedicoda', number: '#2' },
    { source: 'bandcamp', kind: 'track', id: '3403144911', title: 'Duet for Cello and Orchestra', artist: 'Cassandra Miller', height: 120, info: 'Glauco Salvo', number: '#3' },
    { source: 'bandcamp', kind: 'track', id: '3152038698', title: '4.05', artist: 'Glauco Salvo', height: 120, info: 'Glauco Salvo', number: '+ Bonus track' },
    { source: 'bandcamp', kind: 'album', id: '1264817469', title: 'Ett', artist: 'Klara Lewis', height: 330, info: 'Klara Lewis', number: '#4' },
    { source: 'youtube', id: 'x5Fgc7wCKbU', title: 'Good Afternoon', artist: 'Sachiko M / Toshimaru Nakamura / Otomo Yoshihide', info: 'Alberto Ricca/Bienoise', number: '#5' },
    { source: 'bandcamp', kind: 'album', id: '3976411371', title: 'Digging The Pedospheric Vibes I / II / III', artist: 'Felicity Mangan', height: 330, info: 'Felicity Mangan', number: '#6' },
    { source: 'youtube', id: 'yVK38X2ylFE', title: 'Haurraren Kanta', artist: 'Verde Prato', info: 'Veza Fernandez', number: '#7' },
    { source: 'youtube', id: 'dYmRnl_J9GI', title: 'Stella Maris', artist: 'Einstürzende Neubauten', info: 'Giulia Polenta', number: '#8' },
    { source: 'bandcamp', kind: 'track', id: '2894278031', title: 'Dychana', artist: 'Księżyc', height: 120, info: 'Natália Trejbalová', number: '#9' },
    { source: 'youtube', id: 'XMslrXsu6Ag', title: 'Dle Yaman', artist: 'Melania Abovian', info: 'Annamaria Ajmone', number: '#10' }
];

const listEl = document.getElementById('tracklist');
const ytWrap = document.getElementById('player-yt');
const bcFrame = document.getElementById('player-bc');
const nowEl = document.getElementById('now-playing');
const noteEl = document.getElementById('player-note');
const prevBtn = document.getElementById('prev-track');
const nextBtn = document.getElementById('next-track');

let current = -1;
let ytPlayer = null;
let ytReady = false;
let pending = null; // track to load as soon as the YouTube API is ready

// build the list
tracks.forEach((t, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'track-btn';
    btn.innerHTML =
        `<span class="track-num">${t.number}</span>` +
        `<span class="track-title"></span>` +
        `<span class="track-artist"></span>`;
    // `<span class="track-info"></span>`;
    btn.querySelector('.track-title').textContent = t.title;
    btn.querySelector('.track-artist').textContent = t.artist;
    // btn.querySelector('.track-info').textContent = t.info;
    btn.addEventListener('click', () => select(i, true));
    li.appendChild(btn);
    listEl.appendChild(li);
});

// YouTube IFrame API
const apiScript = document.createElement('script');
apiScript.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(apiScript);

window.onYouTubeIframeAPIReady = () => {
    ytPlayer = new YT.Player('player-yt-target', {
        width: '100%',
        height: '100%',
        playerVars: { rel: 0, playsinline: 1 },
        events: {
            onReady: () => {
                ytReady = true;
                if (pending) {
                    loadYouTube(pending.track, pending.autoplay);
                    pending = null;
                }
            },
            onStateChange: (e) => {
                if (e.data === YT.PlayerState.ENDED) next(true);
            },
            onError: () => {
                noteEl.textContent = 'Video non disponibile, passo al brano successivo…';
                setTimeout(() => next(true), 1500);
            }
        }
    });
};

function loadYouTube(track, autoplay) {
    if (autoplay) ytPlayer.loadVideoById(track.id);
    else ytPlayer.cueVideoById(track.id);
}

function select(i, autoplay) {
    current = (i + tracks.length) % tracks.length;
    const t = tracks[current];

    listEl.querySelectorAll('li').forEach((li, idx) => {
        li.classList.toggle('is-active', idx === current);
    });
    nowEl.textContent = `${t.artist} — ${t.title}`;

    if (t.source === 'youtube') {
        bcFrame.src = 'about:blank'; // stops Bandcamp audio
        bcFrame.hidden = true;
        ytWrap.hidden = false;
        noteEl.textContent = '';
        if (ytReady) loadYouTube(t, autoplay);
        else pending = { track: t, autoplay };
    } else {
        if (ytReady) ytPlayer.pauseVideo();
        pending = null;
        ytWrap.hidden = true;
        bcFrame.hidden = false;
        bcFrame.height = t.height;
        bcFrame.src =
            `https://bandcamp.com/EmbeddedPlayer/${t.kind}=${t.id}/size=large/bgcol=ffffff/linkcol=ff0055/` +
            `tracklist=${t.kind === 'album' ? 'true' : 'false'}/artwork=small/transparent=true/`;
        noteEl.textContent = 'Bandcamp: premi play nel player. A fine brano usa “Successivo”.';
    }
}

function next(autoplay) { select(current + 1, autoplay); }
function prev() { select(current - 1, true); }

nextBtn.addEventListener('click', () => next(true));
prevBtn.addEventListener('click', prev);

// first track loaded, but not playing
select(0, false);
