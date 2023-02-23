const cartWrapper = document.querySelector('.cart-wrapper')
window.addEventListener('click',function(event){
   if(event.target.hasAttribute('data-cart')){
    const card = event.target.closest('.card');
    //Создаём объект в которой все параметры карточки товара, именуем удобными названиями для того что-бы понимать что под ними заложено
    const productInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector('.product-img').getAttribute('src'),
        title: card.querySelector('.item-title').innerText,
        itemsInbox: card.querySelector('[data-items-in-box').innerText,
        weight: card.querySelector('.price__weight').innerText,
        price: card.querySelector('.price__currency').innerText,
        counter: card.querySelector('[data-counter]').innerText,
    };
    
    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"`);

    if(itemInCart){
        const counterElement = itemInCart.querySelector('[data-counter]');
        counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {

    
    
    const cartItemHtml = `<div class="cart-item" data-id="${productInfo.id}">
    <div class="cart-item__top">
        <div class="cart-item__img">
            <img src="${productInfo.imgSrc}" alt="">
        </div>
        <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.itemsInbox} / ${productInfo.weight}</div>

            <!-- cart-item__details -->
            <div class="cart-item__details">

                <div class="items items--small counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                    <div class="price__currency">${productInfo.price}</div>
                </div>

            </div>
            <!-- // cart-item__details -->

        </div>
    </div>
    </div>`;
    //Добавляем выбранную карточку товара в разметку ( в корзину )
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
   }
   //Сбрасываем кол-во товора после добавления в корзину 
   card.querySelector('[data-counter]').innerText = '1';

   //Отображение статуса корзины Пустая / Полная
   toggleCartStatus();
   //Пересчёт суммы стоимости товаров
   calcCartPrice();
}
})