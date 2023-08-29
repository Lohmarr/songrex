const likeButton = document.querySelector('.like-button');

likeButton.addEventListener('click', async (event) => {
  const songId = likeButton.value;

  try {
    const response = await fetch(`/api/like/${songId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    if (response.ok) {
      const responseData = await response.json();
      if (responseData.liked) {
        likeButton.textContent = 'Liked!';
      } else {
        likeButton.textContent = 'Like Song?';
      }
    } else {
      console.log('Failed to like/unlike song');
    }
  } catch (err) {
    console.log(err);
  }
});