// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');
let count = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
    button.textContent = "Added!";
    button.style.backgroundColor = "#4CAF50";

    // Animation for cart
    document.getElementById('cart-icon').animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.3)' },
        { transform: 'scale(1)' }
      ],
      { duration: 400, easing: 'ease-in-out' }
    );

    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.style.backgroundColor = "#ff5722";
    }, 1000);
  });
});
