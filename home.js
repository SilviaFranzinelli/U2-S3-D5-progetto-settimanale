fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzYTIzN2YyMDE4YzAwMTU5MDc1NDIiLCJpYXQiOjE3Mzc3Mjg1NjcsImV4cCI6MTczODkzODE2N30.HbKyBUszLlxHruj0Uw9FYZNIWr26mftJtbo0cWAGep0"
  }
})
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("Ci dispiace non siamo riusciti a reperire il dato");
    }
  })
  .then((product) => {
    console.log(product);

    const row = document.getElementById("product-list");

    product.forEach((prod) => {
      console.log(prod);

      const li = document.createElement("li");
      li.classList.add("list-group-item", "d-flex", "justify-content-between", "alng-items-center");
      li.innerHTML = `<span>${prod.name}</span> <span class="badge text-bg-primary">${prod.price}€ </span>`;

      row.appendChild(li);
    });
  })
  .catch((err) => {
    console.log(err);
    generateAlert(err.message);
  })

  .finally(() => {
    isLoading(false);
  });

const isLoading = function (loadingState) {
  const spinner = document.querySelector(".spinner-border");
  if (loadingState) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
};

const generateAlert = function (message) {
  const alertContainer = document.getElementById("alert-container");

  alertContainer.innerHTML = `<div class="alert alert-danger" role="alert">
                                  ${message}
                                </div>`;
};
