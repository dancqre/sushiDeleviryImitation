function toggleCartStatus(){

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
    
    if(cartWrapper.children.length > 0){
        orderForm.classList.remove('none') 
        cartEmptyBadge.classList.add('none');

    }else{
        orderForm.classList.add('none') 

        cartEmptyBadge.classList.remove('none');
    }
}