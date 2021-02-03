if (document.URL.match(/new/) || document.URL.match(/edit/)) {
  function price() {
    const priceInput = document.getElementById("item-price");
    const taxPrice = document.getElementById("add-tax-price");
    const profit = document.getElementById("profit");

    priceInput.addEventListener("input", () => {
      taxPrice.innerHTML = Math.floor(priceInput.value * 0.1);
      profit.innerHTML = priceInput.value - Math.floor(priceInput.value * 0.1);
    });
  };

  window.addEventListener("load", price);
}