let cart = [];

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
    showCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>...</p>
            </div>
            <div class="quantity">
                <button onclick="changeQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
            <div class="price">Rs${(item.price * item.quantity).toFixed(2)}</div>
            <span class="close-item" onclick="removeItem(${item.id})">X</span>
        `;
        cartItemsDiv.appendChild(itemDiv);
        subtotal += item.price * item.quantity;
    });

    document.getElementById('subtotal-value').textContent = `Rs${subtotal.toFixed(2)}`;

    // Removed the "X Close" link
    document.querySelector('.buttons').innerHTML = `
        <button onclick="viewCart()">VIEW CART</button>
        <button onclick="checkout()">CHECKOUT</button>
    `;
}

function changeQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            removeItem(id);
        } else {
            updateCart();
        }
    }
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function viewCart() {
    alert('View Cart clicked');
}

function checkout() {
    alert('Checkout clicked');
}

function toggleCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
}

function showCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.style.display = 'block';
}

updateCart(); // Initial cart update

// Close cart when clicking outside
window.onclick = function(event) {
  if (event.target == document.getElementById('cart')) {
    toggleCart();
  }
};