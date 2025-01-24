fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzYTIzN2YyMDE4YzAwMTU5MDc1NDIiLCJpYXQiOjE3Mzc3Mjg1NjcsImV4cCI6MTczODkzODE2N30.HbKyBUszLlxHruj0Uw9FYZNIWr26mftJtbo0cWAGep0"
  }
})
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
  })
  .then((product) => {
    console.log(product);
  });
