$(function() {	//используется для того, чтобы полностью прогрузилась страница


	// Nav Toggle on mobile
	// =======================

	let navToggle = $("#navToggle");
	let nav = $("#nav");

	navToggle.on('click', function(event){
		event.preventDefault();

		$("body").toggleClass('show-nav');
		$(this).toggleClass('active');
		nav.toggleClass('show');
	});

	// смотрим на размер страницы
	let intro = $("#intro");
	let header = $("#header");
	let introH = intro.innerHeight();
	let headerH = header.innerHeight();
	let scrollTop = $(window).scrollTop();	

	// console.log(introH);

	
	// Header class on scroll
	// ======================================================

	headerScroll();	// Скролл страницы

	//resize - для того, чтобы закрыть меню навигации при повороте телефона

	$(window).on("resize", function (){		//resize- для того, чтобы постоянно обновлять размеры окна и избежать неловкости при повороте телефона
		$("body").removeClass('show-nav');
		navToggle.removeClass('active');	//эти 2 пункта для того, чтобы закрывалась навигация на телефоне после выбора секции в меню
		nav.removeClass('show');
	});

	$(window).on("scroll resize", function (){		//resize- для того, чтобы постоянно обновлять размеры окна и избежать неловкости при повороте телефона
		headerScroll();
	});


	// Скролл страницы

	function headerScroll() {
		introH = intro.innerHeight();
		headerH = header.innerHeight();
		let scrollTop = $(this).scrollTop();

		// console.log(scrollTop); смотрим на сколько скроллим страницу

		if(scrollTop >= (introH - headerH) ) {

			header.addClass("header--dark");

		} else {
			header.removeClass("header--dark");
		}
	}

//  Теперь надо скроллить страницу и сравнивать с высотой intro и когда она будет больше,
// то надо будет вывести навигацию


	// Smooth scroll sections
	// ======================================================

	// нам надо при клике на ссылку или кнопку скролить именно к той 
	// секции, к которой он относится
	// 1. выбрать все элементы на которые нужно нажимать для скролла(если надо сделать для большого колличества одинаковых переменных - используется атрибут "data-scroll="#id сервиса"")

	$("[data-scroll]").on("click", function(event) {		//выборка эл-в по data-scroll
		event.preventDefault(); 		//при клике отменяем стандартное поведение

		let scrollEl = $(this).data("scroll");		//сохранение в ссылке при клике на ссылку мы обратимся именно к ней(через this) к переменной на которую мы нажали и получаем data атрибут через метатег data 
		
		//плавный скролл нужно делать от верха. Те при клике нужно получить позицию от верха
		// для этого нужно сделать новую переменную
		let scrollElPos = $(scrollEl).offset().top;	//сохраняем в него выборку из scrollEl по id и с помощью offset().top мы получаем его позицуию от верха

		//плавный скролл делается с помощью анимации(см ниже); "html, body" - для работы в разных брацзерах
		$("html, body").animate({
			scrollTop: scrollElPos - headerH	//переход на конкретное место
		}, 500)	//500 - длительность в мс

		//console.log(scrollEl);	//обращаемся к id при нажатии
		//console.log(scrollElPos);

		$("body").removeClass('show-nav');
		navToggle.removeClass('active');	//эти 2 пункта для того, чтобы закрывалась навигация на телефоне после выбора секции в меню
		nav.removeClass('show');


	});

	// Scroll Spy
	//================================================================

	//для этого в html необходимо написать data-scrollspy= ""

	let windowH = $(window).height();	//высота обзора нашего окна

	scrollSpy(scrollTop);	

	$(window).on("scroll", function() {		//each - проход по каждому атрибуту и в скуобках означает то, что мы проверяем значение каждого предмета
		
		scrollTop = $(this).scrollTop();

		scrollSpy(scrollTop);		
	});

	function scrollSpy(scrollTop) {
		$("[data-scrollspy]").each(function() {

			let $this = $(this);
			let sectionId = $this.data('scrollspy');
			let sectionOffset = $this.offset().top;		//сравнение позиции элемента с позицией скролла

			//console.log(sectionOffset);

			sectionOffset = sectionOffset - (windowH / 3);

			if(scrollTop >= sectionOffset) {
				$('#nav [data-scroll').removeClass('active');	//убираем класс active изначально для того, чтобы не светились все одновременно
				$('#nav [data-scroll="#' + sectionId + '"]').addClass('active');		//селектор эл-та data-scroll, у кот значение data-scroll будут совпадать с id секции и этой секции мы будем добавлять класс active, #nav- это тип только для навигации
			}

			if(scrollTop == 0) {
				$('#nav [data-scroll').removeClass('active');
			}	
		});		
	}


	// Modlas
	// ==================================================

	// Прописываем сначала для нее атрибут data-modal 
	
	$('[data-modal]').on('click', function(event) {		//при клике на атрибут у которого есть data-modal мы будем вызывать модальное окно 
		event.preventDefault();		//отмена действий которые до этого работали(например ссылки)

		let modal = $(this).data('modal');	//сохраняем в переменную то, что мы получаем из атрибута data-modal

		//console.log(modal);

		$('body').addClass('no-scroll');		//Убираем скролл у тега body
		$(modal).addClass('show');


		//Добавляем анимацию которую прописали в css для modal__content	

		setTimeout(function(){		//Добваляем Time Out
			$(modal).find('.modal__content').css({	//Ищем интересующий нас блок и меняем ему свойства с помощью .css 
				transform: 'translateY(0)',
				opacity: '1'
			});
		});
	});

	$('[data-modal-close]').on('click', function(event) {
		event.preventDefault();

		let modal = $(this).parents('.modal');		//получить родителя при нажатии на кнопку parents('.modal') (простыми словами- ищем родителя с классом modal)
		
		modalClose(modal);
	});


	//При написании функции ниже мы сталкиваемся с проблемой, что у нас теперь нажатие даже внутри окна все закрывает
	//Для решения данной проблемы мы должны отменить срабатывание того что ниже для дочернего элемента (1)

	$('.modal').on('click', function() {		//.modal - при нажатии еще и на само модальное окно
		let modal = $(this);

		modalClose(modal);
	});

		//	(1)

	$('.modal__content').on('click', function(event) {		//.modal - при нажатии еще и на само модальное окно
		event.stopPropagation();	//это значит, что при клике на дочерний эл-т не будет срабатывать значение клика как по его родителю

	});

	function modalClose(modal) {
		
		$(modal).find('.modal__content').css({	//Ищем интересующий нас блок и меняем ему свойства с помощью .css 
			transform: 'translateY(-100px)',
			opacity: '0'
		});

		setTimeout(function(){		//Добваляем Time Out
			$('body').removeClass('no-scroll');		//Добавляем скролл у тега body		
			modal.removeClass('show');	// убираем класс видимости
		}, 200);
	}

	// Slick slider		https://kenwheeler.github.io/slick/
	// ===============================================

	// IntroSlider

	let introSlider = $("#introSlider");

	introSlider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,	//отключаем стрелки
	  fade: true, //анимация не свайпа, а замены
	  autoplay: true,	//автопроигрывание картинок
	  autoplaySpeed: 4000	//скорость в мс
	});

	$('#introSliderPrev').on('click', function(){
		introSlider.slick('slickPrev')
	});

	$('#introSliderNext').on('click', function(){
		introSlider.slick('slickNext')
	});

	// Reviews Slider
	let reviewsSlider = $("#reviewsSlider");

	reviewsSlider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,	//отключаем стрелки
	  dots: true,	//включаем точки
	  speed: 500	//скорость в мс
	});

});

