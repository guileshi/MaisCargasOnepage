var celular;
var tablet;
var pc;

$(window).load(function () {
    if (window.screen.width < 576.98) {

        $('.topbar').addClass('mobile')
        $('.filter').addClass('mobile')
        $('.topbar').addClass('container-fluid')
        $('.topbar').removeClass('container')
        $('#topbar__logo__mobile').css("display", "block");
        $('#topbar__logo__desktop').css("display", "none");
        $('.download-app').css("display", "block")
        $('.explanation__subtitle').text("Procure a transportadora pela rota e faça cotação online sem precisar se cadastrar.")
        $('.quotation__form__btn--icon').html("<i class='fas fa-search fa-lg'></i>" + " <span>PESQUISAR</span>")
        $('.rotes').addClass('mobile')

        addLanguageScript = function (name) {
            var head = document.getElementsByTagName("head")[0],
                script = document.createElement('script');

            script.type = 'text/javascript'
            script.src = "js/" + name + '.js'
            head.appendChild(script);
        };
        addLanguageScript('intersection-observer-mobile');

        celular = true;
        console.log("Celular")
    } else if (window.screen.width > 767.98 && window.screen.width <= 1024) {

        $('.topbar').addClass('mobile')
        $('.filter').addClass('mobile')
        $('.topbar').addClass('container-fluid')
        $('.topbar').removeClass('container')
        $('#topbar__logo__mobile').css("display", "block");
        $('#topbar__logo__desktop').css("display", "none");
        $('.download-app').css("display", "block")

        addLanguageScript = function (name) {
            var head = document.getElementsByTagName("head")[0],
                script = document.createElement('script');

            script.type = 'text/javascript'
            script.src = "js/" + name + '.js'
            head.appendChild(script);
        };
        addLanguageScript('intersection-observer-tablet');

        tablet = true;
        console.log("Tablet")
    } else if (window.screen.width > 1025) {

        $('.topbar__divider').css("display", "block");
        pc = true;
        console.log("Computador")
        addLanguageScript = function (name) {
            var head = document.getElementsByTagName("head")[0],
                script = document.createElement('script');

            script.type = 'text/javascript'
            script.src = "js/" + name + '.js'
            head.appendChild(script);
        };
        addLanguageScript('intersection-observer');
    }
});

$('.topbar_list--btn').click(function () {
    $('.sidebar').toggleClass('no__collapse')
    $('#filter--blue').css("display", "block")
})
$('#filter--blue,.sidebar__list__btn--close').click(function () {
    $('#filter--blue').css("display", "none")
    $('.sidebar').toggleClass('no__collapse')
})

// Iniciar contador de numeros
"use strict";
$('.contar').counterUp({
    time: 1000,
    delay: 20
});

// Efeito de rolagem
(function ($) {
    var $doc = $('html,body');
    $(".scroll-page").click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    })
})(jQuery);

const inputOrigin = document.getElementById('origin')
const inputOriginTop = document.getElementById('origin-top')
const inputDestination = document.getElementById('destination')
const inputDestinationTop = document.getElementById('destination-top')

function getTextOrigin(){
    document.getElementById('origin').oninput = () => {
        inputOriginTop.value = inputOrigin.value
    }
}
function getTextOriginTop(){
    document.getElementById('origin-top').oninput = () => {
        inputOrigin.value = inputOriginTop.value
    }
}
function getTextDestination(){
    document.getElementById('destination').oninput = () => {
        inputDestinationTop.value = inputDestination.value
    }
}
function getTextDestinationTop(){
    document.getElementById('destination-top').oninput = () => {
        inputDestination.value = inputDestinationTop.value
    }
}

function onChangeText(e, classname) {
    if (e.value) {
        $(`.${classname}`).addClass('filled')
        $(`.${classname}`).removeClass('empty')
    } else {
        $(`.${classname}`).addClass('empty')
        $(`.${classname}`).removeClass('filled')
    }

    getTextOrigin();
    getTextOriginTop();
    getTextDestination();
    getTextDestinationTop();
}

function onFocus(classname) {
    $(`.${classname}`).addClass('focused')
    $(`.${classname}`).removeClass('blur')

    getTextOrigin();
    getTextOriginTop();
    getTextDestination();
    getTextDestinationTop();
}
function onBlur(classname) {
    $(`.${classname}`).removeClass('focused')
    $(`.${classname}`).addClass('blur')

    getTextOrigin();
    getTextOriginTop();
    getTextDestination();
    getTextDestinationTop();
}