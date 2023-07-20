const genreId = document.querySelector('#genre-names');
let selectedGenreId;

const addSongFormHandler = async (event) => {
  event.preventDefault();
  
  const songTitle = document.querySelector('#title-input').value.trim();
  const songArtist = document.querySelector('#artist-input').value.trim()
    .replace(/\b\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});;
  const songAlbum = document.querySelector('#album-input').value.trim();
  const songEmbed = document.querySelector('#embed-input').value.trim();
  
  if (songTitle && songArtist && songAlbum && songEmbed && selectedGenreId) {
    const response = await fetch('/api/addSong', {
      method: 'POST',
      body: JSON.stringify({ title: songTitle, artist: songArtist, album: songAlbum, embed: songEmbed, genre_id: selectedGenreId }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add song.');
    }
  }
};

genreId.addEventListener('change', (event) => {
  selectedGenreId = event.target.value;
});

document
  .querySelector('.input-form')
  .addEventListener('submit', addSongFormHandler);

