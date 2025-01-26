fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzYTIzN2YyMDE4YzAwMTU5MDc1NDIiLCJpYXQiOjE3Mzc3Mjg1NjcsImV4cCI6MTczODkzODE2N30.HbKyBUszLlxHruj0Uw9FYZNIWr26mftJtbo0cWAGep0"
  }
});

const URL = "https://striveschool-api.herokuapp.com/api/product/";

const form = document.getElementById("productForm");
form.onsubmit = function (event) {
  event.preventDefault();

  const newProduct = {
    name: form.elements.name.value,
    description: form.elements.description.value,
    brand: form.elements.brand.value,
    imageUrl: form.elements.imageUrl.value,
    price: form.elements.price.value
  };

  console.log(newProduct);

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: { "Content-Type": "application/json" }
  });
};
