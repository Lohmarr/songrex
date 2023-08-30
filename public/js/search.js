const searchInput = document.querySelector("#search-input");
const songs = document.querySelectorAll(".card");

searchInput.addEventListener("input", filterList);

function filterList() {
  const filter = searchInput.value.toLowerCase();

  songs.forEach(song => {
    let text = song.textContent;
    if (text.toLowerCase().includes(filter)) {
      song.style.display = "";
    } else {
      song.style.display = "none";
    }
  });
}