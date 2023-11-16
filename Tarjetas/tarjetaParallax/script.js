(function () {
    'use strict';

    // Colores de fondo para el cuerpo de la página
    let BODY_BACKGROUNDS = [
        '#8850FF',
        '#FFBA00',
        '#4054FF'
    ];

    function Slider () {
        this.cards = document.querySelectorAll('.card');
        this.currentIndex = 0;

        this.isDragging = false;
        this.startX = 0;
        this.currentX = 0;

        this.initEvents();
        this.setActivePlaceholder();
    }

    // Inicialización de eventos
    Slider.prototype.initEvents = function () {
        // Eventos para dispositivos táctiles
        document.addEventListener('touchstart', this.onStart.bind(this));
        document.addEventListener('touchmove', this.onMove.bind(this));
        document.addEventListener('touchend', this.onEnd.bind(this));

        // Eventos para ratón
        document.addEventListener('mousedown', this.onStart.bind(this));
        document.addEventListener('mousemove', this.onMove.bind(this));
        document.addEventListener('mouseup', this.onEnd.bind(this));
    };

    // Establecer el marcador de posición activo
    Slider.prototype.setActivePlaceholder = function () {
        let placeholders = document.querySelectorAll('.cards-placeholder__item');
        let activePlaceholder = document.querySelector('.cards-placeholder__item--active');

        if (activePlaceholder) {
            activePlaceholder.classList.remove('cards-placeholder__item--active');
        }

        placeholders[this.currentIndex].classList.add('cards-placeholder__item--active');

        let bodyEl = document.querySelector('body');
        bodyEl.style.backgroundColor = BODY_BACKGROUNDS[this.currentIndex];
    };

    // Inicio del arrastre
    Slider.prototype.onStart = function (evt) {
        this.isDragging = true;

        this.currentX = evt.pageX || evt.touches[0].pageX;
        this.startX = this.currentX;

        let card = this.cards[this.currentIndex];

        // Dimensiones y relación de tamaño de la tarjeta y la ventana
        this.windowWidth = window.innerWidth;
        this.cardWidth = card.offsetWidth;
        this.ratio = this.windowWidth / (this.cardWidth / 4);
    };

    // Fin del arrastre
    Slider.prototype.onEnd = function (evt) {
        this.isDragging = false;

        let diff = this.startX - this.currentX;
        let direction = (diff > 0) ? 'left' : 'right';
        this.startX = 0;

        if (Math.abs(diff) > this.windowWidth / 4) {
            if (direction === 'left') {
                this.slideLeft();
            } else if (direction === 'right') {
                this.slideRight();
            } else {
                this.cancelMoveCard();
            }
        } else {
            this.cancelMoveCard();
        }
    };

    // Movimiento durante el arrastre
    Slider.prototype.onMove = function (evt) {
        if (!this.isDragging) return;

        this.currentX = evt.pageX || evt.touches[0].pageX;
        let diff = this.startX - this.currentX;
        diff *= -1;

        // Limitar el desplazamiento máximo
        if (Math.abs(diff) > this.windowWidth / 4) {
            if (diff > 0) {
                diff = this.windowWidth / 4;
            } else {
                diff = -this.windowWidth / 4;
            }
        }

        this.moveCard(diff);
    };

    // Desplazar la tarjeta hacia la izquierda
    Slider.prototype.slideLeft = function () {
        if (this.currentIndex === this.cards.length - 1) {
            this.cancelMoveCard();
            return;
        }

        let self = this;
        let card = this.cards[this.currentIndex];
        let cardWidth = this.windowWidth / 2;

        card.style.left = '-50%';

        this.resetCardElsPosition();

        this.currentIndex += 1;
        this.setActivePlaceholder();
        card = this.cards[this.currentIndex];

        card.style.left = '50%';

        this.moveCardEls(cardWidth * 3);

        setTimeout(function () {
            self.resetCardElsPosition();
        }, 50);
    };

    // Desplazar la tarjeta hacia la derecha
    Slider.prototype.slideRight = function () {
        if (this.currentIndex === 0) {
            this.cancelMoveCard();
            return;
        }

        let self = this;
        let card = this.cards[this.currentIndex];
        let cardWidth = this.windowWidth / 2;

        card.style.left = '150%';

        this.resetCardElsPosition();

        this.currentIndex -= 1;
        this.setActivePlaceholder();
        card = this.cards[this.currentIndex];

        card.style.left = '50%';

        this.moveCardEls(-cardWidth * 3);

        setTimeout(function () {
            self.resetCardElsPosition();
        }, 50);
    };

    // Cancelar el movimiento de la tarjeta
    Slider.prototype.cancelMoveCard = function () {
        let self = this;
        let card = this.cards[this.currentIndex];

        card.style.transition = 'transform 0.5s ease-out';
        card.style.transform = '';

        this.resetCardElsPosition();
    };

    // Restaurar la posición de los elementos de la tarjeta
    Slider.prototype.resetCardElsPosition = function () {
        let self = this;
        let card = this.cards[this.currentIndex];

        let cardLogo = card.querySelector('.card__logo');
        let cardPrice = card.querySelector('.card__price');
        let cardTitle = card.querySelector('.card__title');
        let cardSubtitle = card.querySelector('.card__subtitle');
        let cardImage = card.querySelector('.card__image');
        let cardWishList = card.querySelector('.card__wish-list');
        let cardCategory = card.querySelector('.card__category');
        let cardWillAnimate = card.querySelectorAll('.card__will-animate');

        // Restablecer las transiciones
        cardWillAnimate.forEach(function (el) {
            el.style.transition = 'transform 0.5s ease-out';
        });

        // Restablecer las transformaciones de cada elemento
        cardLogo.style.transform = '';
        cardPrice.style.transform = '';
        cardTitle.style.transform = '';
        cardSubtitle.style.transform = '';
        cardImage.style.transform = '';
        cardWishList.style.transform = '';
        cardCategory.style.transform = '';

        // Restablecer la tarjeta
        setTimeout(function () {
            card.style.transform = '';
            card.style.transition = '';

            cardWillAnimate.forEach(function (el) {
                el.style.transition = '';
            });
        }, 500);
    };

    // Mover la tarjeta y sus elementos
    Slider.prototype.moveCard = function (diff) {
        let card = this.cards[this.currentIndex];

        card.style.transform = 'translateX(calc(' + diff + 'px - 50%))';
        diff *= -1;

        this.moveCardEls(diff);
    };

    // Mover los elementos individuales de la tarjeta
    Slider.prototype.moveCardEls = function (diff) {
        let card = this.cards[this.currentIndex];

        let cardLogo = card.querySelector('.card__logo');
        let cardPrice = card.querySelector('.card__price');
        let cardTitle = card.querySelector('.card__title');
        let cardSubtitle = card.querySelector('.card__subtitle');
        let cardImage = card.querySelector('.card__image');
        let cardWishList = card.querySelector('.card__wish-list');
        let cardCategory = card.querySelector('.card__category');
        let cardWillAnimate = card.querySelectorAll('.card__will-animate');

        cardLogo.style.transform = 'translateX(' + (diff / this.ratio) + 'px)';
        cardPrice.style.transform = 'translateX(' + (diff / this.ratio) + 'px)';
        cardTitle.style.transform = 'translateX(' + (diff / (this.ratio * 0.90)) + 'px)';
        cardSubtitle.style.transform = 'translateX(' + (diff / (this.ratio * 0.80)) + 'px)';
        cardImage.style.transform = 'translateX(' + (diff / (this.ratio * 0.70)) + 'px)';
        cardWishList.style.transform = 'translateX(' + (diff / (this.ratio * 0.60)) + 'px)';
        cardCategory.style.transform = 'translateX(' + (diff / (this.ratio * 0.50)) + 'px)';
    };

    // Inicializar el slider
    let slider = new Slider();
})();