document.addEventListener("DOMContentLoaded",() => {

    const products = [
        {id:1, name: "Product 1", price: 30},
        {id:2, name: "Product 2", price: 45},
        {id:3, name: "Product 3", price: 60},
        {id:4, name: "Product 4", price: 90}
    ];

    let cart =[]
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");

    products.forEach(product => {
        const productdv = document.createElement('div')
        productdv.classList.add('product')
        productdv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>`
        ;
        productList.appendChild(productdv);
    });

    productList.addEventListener('click',(e) => {
        if(e.target.tagName === 'BUTTON'){
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    });

    function addToCart(product){
        cart.push(product);
        renderCart();
    }

    function renderCart(){
        cartItems.innerText = "";
        let totalPrice = 0;
        if(cart.length){
            emptyCartMessage.classList.add('hidden');
            cartTotalMessage.classList.remove('hidden');
            checkOutBtn.classList.remove('hidden');
            cart.forEach((item,index) => {

                totalPrice+=item.price

                const cartItem = document.createElement('div')
                cartItem.classList.add("cart")
                cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                <button data-id=${item.id}>delete</delete>`
                cartItems.appendChild(cartItem);
               
               cartItems.addEventListener('click', (e) => {
                 if(e.target.tagName ==="BUTTON"){
                    const cartId = parseInt(e.target.getAttribute('data-id'))
                    cart = cart.filter(c => c.id !== cartId)
                    if(cart.length == 0){
                        totalPriceDisplay.innerText = '0.00';
                        checkOutBtn.classList.add('hidden');
                        
                    }
                    renderCart();
                 }
               })
                    
            
            })
            totalPriceDisplay.innerText = `${totalPrice.toFixed(2)}`;
        }else{
            emptyCartMessage.classList.remove('hidden');
        }
    }

    

    checkOutBtn.addEventListener("click", () => {
        cart.length = 0;
        totalPriceDisplay.innerText = '0.00'
        alert("Checkout Successfully")
        renderCart();
           
    })

});