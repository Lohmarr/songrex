const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(likeButton => {
  return likeButton.addEventListener('click', async (event) => {
    const songId = likeButton.value;
    console.log(songId);
  
    try {
      const response = await fetch(`/api/like/${songId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ songId }), // Include the songId in the request body for the route
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
        const errorMessage = await response.json();
        console.log('Failed to like/unlike song:', errorMessage.message);
      }
    } catch (err) {
      console.log(err);
    }
  });
});