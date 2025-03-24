$('.aside_toggle').click(function(){
	$(this).toggleClass('active');
	$('aside').toggleClass('active');
	$('body').toggleClass('lock');

	// Если у header уже есть toggled, оставляем его
	if (!$('header').hasClass('toggled')) {
			$('header').addClass('toggled');
	} else{
	}
});
$(window).scroll(function(){
	if ($(this).scrollTop() > 200) {
			$('header').addClass('toggled');
	} else {
			$('header').removeClass('toggled');
	}
});
$(document).ready(function(){
	$('.search_toggle').click(function(){
			$('.searchform').fadeIn(300, function() {
					$(this).find('input').focus(); // Фокус на инпуте
			});
			$('.search_toggle').fadeOut(100);
	});

	// Закрытие формы при клике вне её области
	$(document).click(function(event) {
			if (!$(event.target).closest('.searchform, .search_toggle').length) {
					$('.searchform').fadeOut(300);
					$('.search_toggle').fadeIn(300);
			}
	});
});

$(".acordeon > div").click(function() {
	var $this = $(this);
	var $activeBlock = $this.find("div:last-child");
	
	if ($this.hasClass("active")) {
			$activeBlock.slideUp();
			$this.removeClass("active");
	} else {
			$this.siblings(".acordeon > div").find("div:last-child").slideUp(function() {
					$(this).prev().removeClass("active");
			});
			$activeBlock.slideDown();
			$('.acordeon > div').removeClass('active');
			$this.addClass('active');
	}
});

$(".plus").click(function () {
	let input = $(this).siblings("input.quantity"); // Находим input
	let currentValue = parseInt(input.val()); // Получаем текущее значение
	let step = parseInt(input.attr("step")) || 1; // Получаем шаг (по умолчанию 1)
	let max = parseInt(input.attr("max")); // Получаем max (если есть)
	
	if (!max || currentValue + step <= max) {
			input.val(currentValue + step).change(); // Увеличиваем и обновляем значение
	}
});

$(".minus").click(function () {
	let input = $(this).siblings("input.quantity"); // Находим input
	let currentValue = parseInt(input.val()); // Получаем текущее значение
	let step = parseInt(input.attr("step")) || 1; // Получаем шаг (по умолчанию 1)
	let min = parseInt(input.attr("min")) || 1; // Получаем min (по умолчанию 1)
	
	if (currentValue - step >= min) {
			input.val(currentValue - step).change(); // Уменьшаем и обновляем значение
	}
});
$('#check_order').on('change', function () {
	$('.form_order button').prop('disabled', !this.checked);
});
//mask
$(".phone").mask("+7 (999) 999-99-99");

//catalog_slider

  $(".catalog_slider").each(function () {
    let $this = $(this); // Текущая карусель
    let $parentRow = $this.closest(".row"); // Находим родительский .row
    let prevButton = $parentRow.next().find(".nav_products_prev")[0]; // Находим кнопку Prev в следующем .row
    let nextButton = $parentRow.next().find(".nav_products_next")[0]; // Находим кнопку Next в следующем .row

    new Swiper(this, {
      loop: false,
      spaceBetween: 12,
      slidesPerView: 1.3,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      breakpoints: {
        576: {
          slidesPerView: 2.3
        },
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        }
      }
    });
  });




// slider home
var swiper = new Swiper(".collection_slider", {
	spaceBetween: 0,
	effect: "fade",
	loop: true,
	navigation: {
		nextEl: ".nav_next",
		prevEl: ".nav_prev",
	},
});
//single product slider with thumbs
var swiper2 = new Swiper(".mySwiper", {
	loop: false,
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
	direction: "horizontal", // По умолчанию вертикальный
    breakpoints: {
        992.5: {
            direction: "vertical", // Горизонтальный при ширине 564px и больше
            slidesPerView: 4
        }
    }
});
var swiper3 = new Swiper(".mySwiper2", {
	spaceBetween: 0,
	thumbs: {
		swiper: swiper2,
	},
	loop: true,
});

//Popup
$('.get_product').click(function(e){
	e.preventDefault()
	$('.for_cart').addClass('active')
	$('body').addClass('lock')
})
$('.btn_close').click(function(){
	$('.popup').removeClass('active');
	$('body').removeClass('lock')
})
//click on outside popup
$(document).mouseup(function (e) {
	var container = $(".popup_dialog");
	if (container.has(e.target).length === 0) {
		$('.popup').removeClass('active');
		$('body').removeClass('lock');
	}
});

// удали когда подключишь вордпресс
$(".sizes span").click(function () {
	if (!$(this).hasClass("not")) { 
			$(".sizes span").removeClass("current"); // Удаляем у всех
			$(this).addClass("current"); // Добавляем текущему
	}
});
function orderAlert() {
	$('.for_order').addClass('active')
	$('body').addClass('lock')
}

//в конце
Fancybox.bind('[data-fancybox="size"]', {
	// Your custom options
});
Fancybox.bind('[data-fancybox="gallery"]', {
	// Your custom options
});