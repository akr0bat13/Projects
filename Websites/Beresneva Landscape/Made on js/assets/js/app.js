$(function () {
  // Animation pages

  $(document).ready(function () {
    // let header = $("#header")

    // AOS 	https://github.com/michalsnik/aos
    // =========================================

    AOS.init()

    AOS.init({
      // Global settings:
      disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 200, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    })
  })

  // Navigation

  let navToggle = $('#navToggle')
  let nav = $('#nav')
  let header = $('#header')
  let logoMobile = $('#logo-mobile')
  let logoIntro = $('#logo-intro')

  navToggle.on('click', function (event) {
    event.preventDefault()
    $('body').toggleClass('show-nav')
    $(this).toggleClass('active')
    nav.toggleClass('show')
    header.toggleClass('show')
    logoMobile.toggleClass('show')
    logoIntro.toggleClass('hide')
  })

  $(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop()
    console.log(scrollTop)

    if (scrollTop > 0) {
      header.addClass('header--dark')
    } else {
      header.removeClass('header--dark')
    }
  })

  // Modals

  const modalLinks = document.querySelectorAll('.modal-link')
  const body = document.querySelector('body')
  const lockPadding = document.querySelectorAll('.lock-padding')

  let unlock = true

  const timeout = 500

  if (modalLinks.length > 0) {
    for (let index = 0; index < modalLinks.length; index++) {
      const modalLink = modalLinks[index]
      modalLink.addEventListener('click', function (event) {
        const modalName = modalLink.getAttribute('href').replace('#', '')
        const curentModal = document.getElementById(modalName)
        modalOpen(curentModal)
        event.preventDefault()
      })
    }
  }

  const modalCloseIcon = document.querySelectorAll('.close-modal')
  if (modalCloseIcon.length > 0) {
    for (let index = 0; index < modalCloseIcon.length; index++) {
      const el = modalCloseIcon[index]
      el.addEventListener('click', function (event) {
        modalClose(el.closest('.modal'))
        event.preventDefault()
      })
    }
  }

  function modalOpen(curentModal) {
    $('#modal__form').removeClass('hide')
    $('#modal__thanks').removeClass('show')
    if (curentModal && unlock) {
      const modalActive = document.querySelector('.modal.open')
      if (modalActive) {
        modalClose(modalActive, false)
      } else {
        bodyLock()
      }
      curentModal.classList.add('open')
      curentModal.addEventListener('click', function (event) {
        if (!event.target.closest('.modal__content')) {
          modalClose(event.target.closest('.modal'))
        }
      })
    }
  }

  function modalClose(modalActive, doUnlock = true) {
    if (unlock) {
      modalActive.classList.remove('open')
      if (doUnlock) {
        bodyUnLock()
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth - document.querySelector('.page').offsetWidth + 'px'

    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index]
        el.style.paddingRight = lockPaddingValue
      }
    }
    body.style.paddingRight = lockPaddingValue
    body.classList.add('no-scroll')

    unlock = false
    setTimeout(function () {
      unlock = true
    }, timeout)
  }

  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index]
          el.style.paddingRight = '0px'
        }
      }
      body.style.paddingRight = '0px'
      body.classList.remove('no-scroll')
    }, timeout)

    unlock = false
    setTimeout(function () {
      unlock = true
    }, timeout)
  }

  document.addEventListener('keydown', function (event) {
    if (event.which === 27) {
      const modalActive = document.querySelector('.modal.open')
      modalClose(modalActive)
    }
  })

  // Slick slider		https://kenwheeler.github.io/slick/
  // ===============================================

  // IntroSlider

  let introSlider = $('#introSlider')

  introSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, //отключаем стрелки
    fade: true, //анимация не свайпа, а замены
    autoplay: true, //автопроигрывание картинок
    autoplaySpeed: 4000, //скорость в мс
    speed: 1000,
  })

  // Slider on projects

  var swiper = new Swiper('.projects', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    // loop: true,
    mousewheel: false,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  })

  var swiper_2 = new Swiper('.sert', {
    effect: 'coverflow',
    grabCursor: false,

    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    mousewheel: false,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  })

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    watchSlidesProgress: true,
  })

  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  })
  /*
		// Phases Slider

		let phasesSlider = $("#phasesSlider");

		phasesSlider.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,	//отключаем стрелки
			autoplay: true,	//автопроигрывание картинок
			autoplaySpeed: 4000,	//скорость в мс
			dots: true,	//включаем точки
			speed: 500	//скорость в мс
		});

*/
  // E-mail sending

  const form = document.getElementById('form')
  form.addEventListener('submit', formSend)

  async function formSend(event) {
    event.preventDefault()

    let error = formValidate(form)

    let formData = new FormData(form)

    if (error === 0) {
      form.classList.add('_sending')
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        let result = await response.json()
        $('#modal__form').addClass('hide')
        $('#modal__thanks').addClass('show')
        form.classList.remove('_sending')
      } else {
        alert('Error')
        form.classList.remove('_sending')
      }
    } else {
      alert('Заполните обязательные поля')
    }
  }

  function formValidate(form) {
    let error = 0
    let formReq = document.querySelectorAll('._req')
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index]
      formRemoveError(input)
      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input)
          error++
        }
      } else {
        if (input.value === '') {
          formAddError(input)
          error++
        }
      }
    }

    return error
  }
  function formAddError(input) {
    input.parentElement.classList.add('_error')
    input.classList.add('_error')
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error')
    input.classList.remove('_error')
  }
  //Функция проверки E-mail
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
  }
})
