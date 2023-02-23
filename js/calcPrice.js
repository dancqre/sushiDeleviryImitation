function calcCartPrice(){
   const cartWrapper = document.querySelector('.cart-wrapper');
   const priceEl = cartWrapper.querySelectorAll('.price__currency')
   const totalPriceEl = document.querySelector('.total-price');
   
   let priceTotal = 0;

   priceEl.forEach(function (item){

    const amountEl = item.closest('.cart-item').querySelector('[data-counter');

    priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);

   })
   totalPriceEl.innerText = priceTotal;
}