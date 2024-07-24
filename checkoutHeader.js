import { cart } from "./cart2.js";

export function updateCheckoutItems() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.check-out-items').innerHTML = 
    `${cartQuantity} items`;
}
