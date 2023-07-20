const likeButton = document.querySelector('.like-button');

    likeButton.addEventListener('click', async (event) => {
    const songId = likeButton.value;
    // let liked = true;
    console.log(songId)
    try {
      const response = await fetch(`/api/like/${songId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({liked: true}),
      });
      if (response.ok) {
        alert('Song liked!');
        likeButton.textContent = 'Liked!';
        console.log('Song liked!');
      } else {
        alert('Failed to like song :(');
        console.log('Failed to like song');
      }
    } catch (err) {
      console.log(err);
    }
  });