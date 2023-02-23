
//Отслеживаем событие клик по всему окну приложения.
window.addEventListener('click',function(event){
   
    let counter;

    //Если клик произошёл на кнопке плюс или минус выполняем условие.
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const counterWrapper = event.target.closest('.counter-wrapper');

        counter = counterWrapper.querySelector('[data-counter]');
    }
    //Если клик произошёл на кнопке плюс добавляем +1 к счётчику
    if (event.target.dataset.action === 'plus'){
    
        counter.innerText = ++counter.innerText;

    }
    //Если клик произошёл на кнопке плюс отнимаем -1 к счётчику
    if (event.target.dataset.action === 'minus'){     
        //Если кол-во счётчика (кол-во товара) больше 1 выпоняем действие -1 к счётчику
    if(counter.innerText > 1){

        counter.innerText = --counter.innerText

        //Проверка на товар в корзине
    }else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
         //Удаляем товар в корзине если нажат минус и кол-во товара = 1
         
        event.target.closest('.cart-item').remove();

        //Статус корзины 
        toggleCartStatus();
        //Пересчёт стоимости товаров
        calcCartPrice();
    }
    }
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper'))  {
    //Пересчёт стоимости товаров
      calcCartPrice();
    }
})