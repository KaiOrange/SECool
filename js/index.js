var ALLCLASSNAME = [
    "bounce", "flash", "pulse", "rubberBand",
    "shake", "headShake", "swing", "tada",
    "wobble", "jello", "bounceIn", "bounceInDown",
    "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut",
    "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp",
    "fadeIn", "fadeOut", "flipInX", "flipInY",
    "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut",
    "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft",
    "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight",
    "rotateOutUpLeft", "rotateOutUpRight", "hinge", "jackInTheBox",
    "rollIn", "rollOut", "zoomIn", "zoomInDown",
    "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut",
    "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp",
    "slideInDown", "slideInLeft", "slideInRight", "slideInUp",
    "slideOutDown", "slideOutLeft", "slideOutRight", "slideOutUp"
];
var ANIMATIONEND = 'webkitAnimationEnd animationend';
var ANIMATIONITERATION = 'webkitAnimationIteration animationiteration';

$.fn.extend({
    animateCss: function (animationName, callback) {
        this.addClass('animated ' + animationName).one(ANIMATIONEND, function () {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
                callback();
            }
        });
        return this;
    }
});

$(function (){
    var CURRENTURL = window.location.href;
    //波浪效果
    var formSelector  = "";
    var inputSelector = "";
    var logoSelector = "";
    var className = "";
    if (CURRENTURL.indexOf("www.baidu.com") > 0) {//百度
        formSelector = "#form";
        inputSelector = "#kw";
        logoSelector = "#lg>img,#result_logo>img";
        className = "secool-name-baidu";
    } else if (CURRENTURL.indexOf("www.sogou.com") > 0) {//搜狗
        formSelector = "#sf";
        inputSelector = "#query";
        logoSelector = "#logo-l>span,#sogou_wrap_id>.header>.logo";
        className = "secool-name-sogou";
    } else if (CURRENTURL.indexOf("www.so.com") > 0) {//360
        formSelector = "#suggest-align";
        inputSelector = "#input";
        logoSelector = "#bd_logo>a,#g-hd-nav>.g-hd-logo>a";
        className = "secool-name-so";
    }
    var formEl = $(formSelector);
    var inputEl = $(inputSelector);
    var logoEl = $(logoSelector);
    formEl.addClass(className);

    for (var i = 0; i < 3; i++) {
        formEl.append('<div class="secool-wave"></div>');
    }
    formEl.addClass("secool-input");
    inputEl.focus(function () {
        formEl.addClass("secool-input");
    });
    formEl.on(ANIMATIONITERATION, function () {
        if (!inputEl.is(":focus")) {
            $(this).removeClass('secool-input');
        }
    });

    //点击图片效果
    $("body").on("click",logoSelector,function (e) {
        $(this).animateCss(ALLCLASSNAME[Math.floor(Math.random() * ALLCLASSNAME.length)]);
        e.preventDefault();
        e.stopPropagation();
    });
});
